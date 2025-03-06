import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { GetListUser } from "../services/get-user/get-user.api";

export interface IndexContextProps {
  valueSearch?: string;
  setValueSearch?: React.Dispatch<React.SetStateAction<string>>;
  listUserData: any;
  isError: boolean;
  isLoading: boolean;
}

export const IndexContext = createContext({} as IndexContextProps);

const IndexProviders = ({ children }: any) => {
  const [valueSearch, setValueSearch] = useState<string>("");

  const {
    data: listUserData,
    isError,
    isLoading,
  } = useQuery({ queryKey: ["users"], queryFn: GetListUser });

  return (
    <IndexContext.Provider
      value={{ valueSearch, setValueSearch, listUserData, isError, isLoading }}
    >
      {children}
    </IndexContext.Provider>
  );
};

export default IndexProviders;
