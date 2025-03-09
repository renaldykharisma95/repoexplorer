import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { DataRepoInterface } from "./list-repo.interface";
import { ListUserInterface } from "./list-user.interface";

export interface IndexContextProps {
  valueSearch?: string;
  setValueSearch?: React.Dispatch<React.SetStateAction<string>>;
  setSubmitSearch?: React.Dispatch<React.SetStateAction<string>>;
  listUserData: ListUserInterface[] | null;
  listRepoData: DataRepoInterface[];
  isErrorUser: boolean;
  isErrorRepo: boolean;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  isUserLoading: boolean;
  isRepoLoading: boolean;
  isFetchedAfterMount: boolean;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<ListUserInterface[], Error>>;
}
