import { useContext } from "react";
import { MovesContext } from "src/context/MovesContext";
import { VictoryContext } from "src/context/VictoryContext";

const useNewRound = () => {
  const { setCircleMoves, setCrossMoves } = useContext(MovesContext);
  const {
    victory,
    setVictory,
    setEndGame,
    setAllCircleVictories,
    setAllCrossVictories,
  } = useContext(VictoryContext);

  return () => {
    if (victory === "cross") {
      setAllCrossVictories((previous) => previous + 1);
    } else if (victory === "circle") {
      setAllCircleVictories((previous) => previous + 1);
    }
    setCircleMoves([]);
    setCrossMoves([]);
    setVictory("");
    setEndGame(true);
  };
};

export default useNewRound;
