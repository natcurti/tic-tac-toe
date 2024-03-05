import { createContext, useState } from "react";

interface IVictory {
  victory: string;
  setVictory: React.Dispatch<React.SetStateAction<string>>;
}

export const VictoryContext = createContext<IVictory>({
  victory: "",
  setVictory: () => {},
});

interface IVictoryContextProvider {
  children: React.ReactNode;
}

export const VictoryContextProvider = ({
  children,
}: IVictoryContextProvider) => {
  const [victory, setVictory] = useState("");

  return (
    <VictoryContext.Provider value={{ victory, setVictory }}>
      {children}
    </VictoryContext.Provider>
  );
};
