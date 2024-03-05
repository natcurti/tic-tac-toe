import { createContext, useState } from "react";

interface IMoves {
  crossMoves: number[];
  circleMoves: number[];
  setCrossMoves: React.Dispatch<React.SetStateAction<number[]>>;
  setCircleMoves: React.Dispatch<React.SetStateAction<number[]>>;
}

export const MovesContext = createContext<IMoves>({
  crossMoves: [],
  circleMoves: [],
  setCrossMoves: () => {},
  setCircleMoves: () => {},
});
MovesContext.displayName = "Moves";

interface IMovesContextProvider {
  children: React.ReactNode;
}

export const MovesContextProvider = ({ children }: IMovesContextProvider) => {
  const [crossMoves, setCrossMoves] = useState<number[]>([]);
  const [circleMoves, setCircleMoves] = useState<number[]>([]);

  return (
    <MovesContext.Provider
      value={{ crossMoves, circleMoves, setCrossMoves, setCircleMoves }}
    >
      {children}
    </MovesContext.Provider>
  );
};
