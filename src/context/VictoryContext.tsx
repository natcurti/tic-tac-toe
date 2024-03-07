import { createContext, useState } from "react";

interface IVictory {
  victory: string;
  setVictory: React.Dispatch<React.SetStateAction<string>>;
  endGame: boolean;
  setEndGame: React.Dispatch<React.SetStateAction<boolean>>;
  allCrossVictories: number;
  setAllCrossVictories: React.Dispatch<React.SetStateAction<number>>;
  allCircleVictories: number;
  setAllCircleVictories: React.Dispatch<React.SetStateAction<number>>;
}

export const VictoryContext = createContext<IVictory>({
  victory: "",
  setVictory: () => {},
  endGame: false,
  setEndGame: () => {},
  allCrossVictories: 0,
  setAllCrossVictories: () => {},
  allCircleVictories: 0,
  setAllCircleVictories: () => {},
});

interface IVictoryContextProvider {
  children: React.ReactNode;
}

export const VictoryContextProvider = ({
  children,
}: IVictoryContextProvider) => {
  const [victory, setVictory] = useState("");
  const [endGame, setEndGame] = useState(false);
  const [allCrossVictories, setAllCrossVictories] = useState(0);
  const [allCircleVictories, setAllCircleVictories] = useState(0);

  return (
    <VictoryContext.Provider
      value={{
        victory,
        setVictory,
        endGame,
        setEndGame,
        allCrossVictories,
        setAllCrossVictories,
        allCircleVictories,
        setAllCircleVictories,
      }}
    >
      {children}
    </VictoryContext.Provider>
  );
};
