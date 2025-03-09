import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import { GetListRepo, GetListUser } from "@services/get-data.api";
import { ListUserInterface } from "@interfaces/list-user.interface";
import { DataRepoInterface } from "@interfaces/list-repo.interface";
import { ErrorResponse } from "@/services/base-service";
import { IndexContextProps } from "@/interfaces/index-providers";

type IndexProviderInterface = {
  children: React.ReactNode;
};

export const IndexContext = createContext({} as IndexContextProps);

const IndexProviders = ({ children }: IndexProviderInterface) => {
  const [valueSearch, setValueSearch] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [listUserData, setListUserData] = useState<ListUserInterface[] | null>(
    null
  );

  const preventRefetch = {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
  };

  const {
    data: userData = [],
    isError: isErrorUser,
    isSuccess,
    isFetching: isUserLoading,
    isFetchedAfterMount,
    refetch,
  } = useQuery({
    queryKey: ["users", valueSearch],
    queryFn: () =>
      GetListUser(valueSearch) as Promise<
        { items: ListUserInterface[] } & ErrorResponse
      >,
    select: ({ items }) => items,
    enabled: false,
    ...preventRefetch,
  });

  const {
    data: listRepoData = [],
    isError: isErrorRepo,
    isLoading: isRepoLoading,
  } = useQuery({
    queryKey: ["repo", user],
    queryFn: () =>
      GetListRepo(user) as Promise<DataRepoInterface[] & ErrorResponse>,
    select: (data) => data || [],
    enabled: !!user,
    ...preventRefetch,
  });

  useEffect(() => {
    if (!valueSearch.length || isSuccess) {
      setListUserData([]);
    } else {
      setListUserData(null);
    }
  }, [valueSearch, isSuccess]);

  useEffect(() => {
    if (userData.length > 0 && isFetchedAfterMount) setListUserData(userData);
  }, [userData, isFetchedAfterMount]);

  return (
    <IndexContext.Provider
      value={{
        valueSearch,
        refetch,
        setValueSearch,
        setUser,
        listUserData,
        listRepoData,
        isErrorUser,
        isErrorRepo,
        isUserLoading,
        isRepoLoading,
        isFetchedAfterMount,
      }}
    >
      {children}
    </IndexContext.Provider>
  );
};

export default IndexProviders;
