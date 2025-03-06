import get from "./base-service";

export const GetListUser = (search: string) => {
  try {
    const resp = get(`/search/users?q=${search}&per_page=5`);
    return resp;
  } catch (error) {
    return error;
  }
};

export const GetListRepo = (user: string) => {
  try {
    const resp = get(`/users/${user}/repos`);
    return resp;
  } catch (error) {
    return error;
  }
};
