import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GamePreferencesContext } from "src/context/GamePreferencesContext";
import { MovesContext } from "src/context/MovesContext";
import { VictoryContext } from "src/context/VictoryContext";
import { WhoIsTurnContext } from "src/context/WhoIsTurnContext";

const useRestartGame = () => {
  const { setIconChoices, setTypeOfGame } = useContext(GamePreferencesContext);
  const { setTurn } = useContext(WhoIsTurnContext);
  const { setCircleMoves, setCrossMoves } = useContext(MovesContext);
  const { setVictory } = useContext(VictoryContext);
  const navigate = useNavigate();

  return () => {
    setIconChoices({
      playerOneIcon: "",
      playerTwoIcon: "",
    });
    setTypeOfGame("");
    setTurn("cross");
    setCircleMoves([]);
    setCrossMoves([]);
    setVictory("");
    navigate("/");
  };
};

export default useRestartGame;
