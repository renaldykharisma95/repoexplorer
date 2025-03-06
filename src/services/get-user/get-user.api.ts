import { get } from "../base-service";

export const GetListUser = () => {
  try {
    const resp = get("/users");
    return resp;
  } catch (error) {
    return error;
  }
};
