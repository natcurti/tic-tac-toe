import { createContext, useState } from "react";
import { IconPreferences } from "src/types/IconPreferences";
import { useNavigate } from "react-router-dom";

interface IGameContext {
  iconChoices: IconPreferences;
  typeOfGame: string;
  setIconChoices: React.Dispatch<React.SetStateAction<IconPreferences>>;
  setTypeOfGame: React.Dispatch<React.SetStateAction<string>>;
  chooseIcon: (icon: string) => void;
  chooseTypeOfGame: (gameType: string) => void;
}

const DEFAULT_VALUE = {
  iconChoices: {
    playerOneIcon: "",
    playerTwoIcon: "",
  },
  typeOfGame: "",
  setIconChoices: () => {},
  setTypeOfGame: () => {},
  chooseIcon: () => {},
  chooseTypeOfGame: () => {},
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

  const [typeOfGame, setTypeOfGame] = useState<string>(
    DEFAULT_VALUE.typeOfGame
  );

  const chooseIcon = (icon: string) => {
    if (iconChoices.playerOneIcon === "" && iconChoices.playerTwoIcon === "") {
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
    } else return;
  };

  const chooseTypeOfGame = (gameType: string) => {
    if (typeOfGame === "") {
      if (gameType === "CPU") {
        setTypeOfGame("CPU");
        startGame();
      } else {
        setTypeOfGame("Multiplayer");
        startGame();
      }
    } else return;
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
      }}
    >
      {children}
    </GamePreferencesContext.Provider>
  );
};
