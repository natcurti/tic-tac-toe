import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GamePreferencesContext } from "src/context/GamePreferencesContext";
import { MovesContext } from "src/context/Moves";
import { VictoryContext } from "src/context/Victory";
import { WhoIsTurnContext } from "src/context/WhoIsTurnContext";

const useRestartGame = () => {
  const { setIconChoices, setTypeOfGame } = useContext(GamePreferencesContext);
  const turnContext = useContext(WhoIsTurnContext);
  const { setCircleMoves, setCrossMoves } = useContext(MovesContext);
  const { setVictory } = useContext(VictoryContext);
  const navigate = useNavigate();

  return () => {
    setIconChoices({
      playerOneIcon: "",
      playerTwoIcon: "",
    });
    setTypeOfGame("");
    turnContext?.setTurn("cross");
    setCircleMoves([]);
    setCrossMoves([]);
    setVictory("");
    navigate("/");
  };
};

export default useRestartGame;
