import { createContext, useState } from "react";
import { IconPreferences } from "src/types/IconPreferences";
import { PlayerPreferences } from "src/types/PlayerPreferences";
import { useNavigate } from "react-router-dom";

interface IGameContext {
  iconChoices: IconPreferences;
  playerChoices: PlayerPreferences;
  typeOfGame: string;
  setIconChoices: React.Dispatch<React.SetStateAction<IconPreferences>>;
  setTypeOfGame: React.Dispatch<React.SetStateAction<string>>;
  chooseIcon: (icon: string) => void;
  chooseTypeOfGame: (gameType: string) => void;
  setPlayerChoices: React.Dispatch<React.SetStateAction<PlayerPreferences>>;
}

const DEFAULT_VALUE = {
  iconChoices: {
    playerOneIcon: "",
    playerTwoIcon: "",
  },
  playerChoices: {
    playerOne: "",
    playerTwo: "",
  },
  typeOfGame: "",
  setIconChoices: () => {},
  setTypeOfGame: () => {},
  chooseIcon: () => {},
  chooseTypeOfGame: () => {},
  setPlayerChoices: () => {},
};

export const GamePreferencesContext =
  createContext<IGameContext>(DEFAULT_VALUE);

GamePreferencesContext.displayName = "Game Preferences";

interface IGamePreferencesProvider {
  children: React.ReactNode;
}

export const GamePreferencesProvider = ({
  children,
}: IGamePreferencesProvider) => {
  const [iconChoices, setIconChoices] = useState<IconPreferences>(
    DEFAULT_VALUE.iconChoices
  );

  const [playerChoices, setPlayerChoices] = useState<PlayerPreferences>(
    DEFAULT_VALUE.playerChoices
  );

  const [typeOfGame, setTypeOfGame] = useState<string>(
    DEFAULT_VALUE.typeOfGame
  );

  const chooseIcon = (icon: string) => {
    if (icon === "cross") {
      setIconChoices({
        playerOneIcon: "cross",
        playerTwoIcon: "circle",
      });
    } else {
      setIconChoices({
        playerOneIcon: "circle",
        playerTwoIcon: "cross",
      });
    }
  };

  const chooseTypeOfGame = (gameType: string) => {
    if (typeOfGame === "") {
      if (gameType === "CPU") {
        setTypeOfGame("CPU");
        if (iconChoices.playerOneIcon === "cross") {
          setPlayerChoices({
            playerOne: "Person",
            playerTwo: "Computer",
          });
        } else {
          setPlayerChoices({
            playerOne: "Computer",
            playerTwo: "Person",
          });
        }
        startGame();
      } else {
        setTypeOfGame("Multiplayer");
        startGame();
      }
    }
  };

  const navigate = useNavigate();

  const startGame = () => {
    if (iconChoices.playerOneIcon !== "" && iconChoices.playerTwoIcon !== "") {
      navigate("/new-game");
    }
  };

  return (
    <GamePreferencesContext.Provider
      value={{
        iconChoices,
        typeOfGame,
        setIconChoices,
        setTypeOfGame,
        chooseIcon,
        chooseTypeOfGame,
        playerChoices,
        setPlayerChoices,
      }}
    >
      {children}
    </GamePreferencesContext.Provider>
  );
};
