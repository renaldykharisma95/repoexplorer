import { DataRepoInterface } from "@interfaces/list-repo.interface";
import { DataUserInterface } from "@interfaces/list-user.interface";
import get, { ErrorResponse } from "@services/base-service";

export const GetListUser = (search: string) => {
  try {
    const resp = get<DataUserInterface>(`/search/users?q=${search}&per_page=5`);
    return resp;
  } catch (error) {
    throw error as ErrorResponse;
  }
};

export const GetListRepo = (user: string) => {
  try {
    const resp = get<DataRepoInterface>(`/users/${user}/repos`);
    return resp;
  } catch (error) {
    throw error as ErrorResponse;
  }
};
