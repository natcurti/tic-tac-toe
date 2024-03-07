import { useContext } from "react";
import { MovesContext } from "src/context/MovesContext";
import { VictoryContext } from "src/context/VictoryContext";

const useNewRound = () => {
  const { setCircleMoves, setCrossMoves } = useContext(MovesContext);
  const { setVictory, setEndGame } = useContext(VictoryContext);

  return () => {
    setCircleMoves([]);
    setCrossMoves([]);
    setVictory("");
    setEndGame(true);
  };
};

export default useNewRound;
