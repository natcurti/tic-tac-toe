import { createContext, useState } from "react";

interface IVictory {
  victory: string;
  setVictory: React.Dispatch<React.SetStateAction<string>>;
  endGame: boolean;
  setEndGame: React.Dispatch<React.SetStateAction<boolean>>;
}

export const VictoryContext = createContext<IVictory>({
  victory: "",
  setVictory: () => {},
  endGame: false,
  setEndGame: () => {},
});

interface IVictoryContextProvider {
  children: React.ReactNode;
}

export const VictoryContextProvider = ({
  children,
}: IVictoryContextProvider) => {
  const [victory, setVictory] = useState("");
  const [endGame, setEndGame] = useState(false);

  return (
    <VictoryContext.Provider
      value={{ victory, setVictory, endGame, setEndGame }}
    >
      {children}
    </VictoryContext.Provider>
  );
};
