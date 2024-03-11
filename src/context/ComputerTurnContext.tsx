import { createContext, useContext, useEffect, useState } from "react";
import { MovesContext } from "./MovesContext";

interface ComputerTurn {
  isComputerTurn: boolean;
  setIsComputerTurn: React.Dispatch<React.SetStateAction<boolean>>;
  randomId: number | undefined;
}

export const ComputerTurnContext = createContext<ComputerTurn>({
  isComputerTurn: false,
  setIsComputerTurn: () => {},
  randomId: undefined,
});

ComputerTurnContext.displayName = "Computer Turn";

interface IComputerTurnProvider {
  children: React.ReactNode;
}

export const ComputerTurnProvider = ({ children }: IComputerTurnProvider) => {
  const [isComputerTurn, setIsComputerTurn] = useState<boolean>(false);
  const { circleMoves, crossMoves } = useContext(MovesContext);
  const [randomId, setRandomId] = useState<number | undefined>(undefined);

  useEffect(() => {
    const avaliableMoves: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const filteredArray = avaliableMoves.filter(
      (number) => !crossMoves.includes(number) && !circleMoves.includes(number)
    );

    if (filteredArray.length > 0) {
      const position = Math.floor(Math.random() * filteredArray.length);
      setRandomId(filteredArray[position]);
    }
  }, [isComputerTurn, circleMoves, crossMoves]);

  return (
    <ComputerTurnContext.Provider
      value={{
        isComputerTurn,
        setIsComputerTurn,
        randomId,
      }}
    >
      {children}
    </ComputerTurnContext.Provider>
  );
};
