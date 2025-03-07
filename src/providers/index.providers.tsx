import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { GetListRepo, GetListUser } from "@services/get-data.api";
import { ListUserInterface } from "@interfaces/list-user.interface";
import { DataRepoInterface } from "@interfaces/list-repo.interface";

export interface IndexContextProps {
  valueSearch?: string;
  valueSubmitSearch: string;
  setValueSearch?: React.Dispatch<React.SetStateAction<string>>;
  setSubmitSearch?: React.Dispatch<React.SetStateAction<string>>;
  listUserData: ListUserInterface[];
  listRepoData: DataRepoInterface[];
  isErrorUser: boolean;
  isErrorRepo: boolean;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  isUserLoading: boolean;
  isRepoLoading: boolean;
}

type IndexProviderInterface = {
  children: React.ReactNode;
};

export const IndexContext = createContext({} as IndexContextProps);

const IndexProviders = ({ children }: IndexProviderInterface) => {
  const [valueSearch, setValueSearch] = useState<string>("");
  const [valueSubmitSearch, setSubmitSearch] = useState<string>("");
  const [user, setUser] = useState<string>("");

  const {
    data: listUserData = [],
    isError: isErrorUser,
    isSuccess,
    isLoading: isUserLoading,
  } = useQuery({
    queryKey: ["users", valueSubmitSearch],
    queryFn: () =>
      GetListUser(valueSubmitSearch) as Promise<{ items: ListUserInterface[] }>,
    select: ({ items }) => items,
    enabled: !!valueSubmitSearch.length,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
  });

  const {
    data: listRepoData = [],
    isError: isErrorRepo,
    isLoading: isRepoLoading,
  } = useQuery({
    queryKey: ["repo", user],
    queryFn: () => GetListRepo(user) as Promise<DataRepoInterface[]>,
    select: (data) => data || [],
    enabled: isSuccess && !!user,
  });

  return (
    <IndexContext.Provider
      value={{
        valueSearch,
        valueSubmitSearch,
        setValueSearch,
        setSubmitSearch,
        listUserData,
        listRepoData,
        isErrorUser,
        isErrorRepo,
        setUser,
        isUserLoading,
        isRepoLoading,
      }}
    >
      {children}
    </IndexContext.Provider>
  );
};

export default IndexProviders;
