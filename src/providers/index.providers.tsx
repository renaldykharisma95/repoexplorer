import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { GetListRepo, GetListUser } from "../services/get-data.api";

export interface IndexContextProps {
  valueSearch?: string;
  valueSubmitSearch: string;
  setValueSearch?: React.Dispatch<React.SetStateAction<string>>;
  setSubmitSearch?: React.Dispatch<React.SetStateAction<string>>;
  listUserData: any[];
  listRepoData: any[];
  isErrorUser: boolean;
  isErrorRepo: boolean;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  isUserLoading: boolean;
  isRepoLoading: boolean;
}

export const IndexContext = createContext({} as IndexContextProps);

const IndexProviders = ({ children }: any) => {
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
    queryFn: () => GetListUser(valueSubmitSearch),
    select: (data: any) => data.items,
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
    queryFn: () => GetListRepo(user),
    select: (data: any) => data || [],
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
        isRepoLoading
      }}
    >
      {children}
    </IndexContext.Provider>
  );
};

export default IndexProviders;
