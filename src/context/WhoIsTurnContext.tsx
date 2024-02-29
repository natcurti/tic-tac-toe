import { createContext, useState } from "react";

interface Turn {
  turn: string;
  setTurn: React.Dispatch<React.SetStateAction<string>>;
}

export const WhoIsTurnContext = createContext<Turn | undefined>(undefined);

WhoIsTurnContext.displayName = "Who is Turn";

interface IWhoIsTurnProvider {
  children: React.ReactNode;
}

export const WhoIsTurnProvider = ({ children }: IWhoIsTurnProvider) => {
  const [turn, setTurn] = useState<string>("cross");

  return (
    <WhoIsTurnContext.Provider value={{ turn, setTurn }}>
      {children}
    </WhoIsTurnContext.Provider>
  );
};
