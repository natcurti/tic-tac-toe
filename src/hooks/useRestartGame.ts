import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GamePreferencesContext } from "src/context/GamePreferencesContext";
import { MovesContext } from "src/context/MovesContext";
import { VictoryContext } from "src/context/VictoryContext";
import { WhoIsTurnContext } from "src/context/WhoIsTurnContext";

const useRestartGame = () => {
  const { setIconChoices, setTypeOfGame, setPlayerChoices } = useContext(
    GamePreferencesContext
  );
  const { setTurn } = useContext(WhoIsTurnContext);
  const { setCircleMoves, setCrossMoves } = useContext(MovesContext);
  const {
    setVictory,
    setAllCircleVictories,
    setAllCrossVictories,
    setAllTies,
  } = useContext(VictoryContext);
  const navigate = useNavigate();

  return () => {
    setIconChoices({
      playerOneIcon: "",
      playerTwoIcon: "",
    });
    setPlayerChoices({
      playerOne: "",
      playerTwo: "",
    });
    setTypeOfGame("");
    setTurn("cross");
    setCircleMoves([]);
    setCrossMoves([]);
    setAllCircleVictories(0);
    setAllCrossVictories(0);
    setAllTies(0);
    setVictory("");
    navigate("/");
  };
};

export default useRestartGame;
