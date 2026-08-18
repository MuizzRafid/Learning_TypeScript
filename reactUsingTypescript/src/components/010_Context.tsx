import { createContext, useContext } from "react";

type GlobalState = {
  flag: string;
  setFlag: (c: string) => void;
};

const MyGlobalContext = createContext<GlobalState>({
  flag: "hello world",
  setFlag: () => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);
