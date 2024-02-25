import { createContext, useState } from "react";
import { IconPreferences } from "src/types/IconPreferences";

interface IGameContext {
  iconChoices: IconPreferences;
  typeOfGame: string;
  chooseIcon: (icon: string) => void;
  chooseTypeOfGame: (gameType: string) => void;
}

const DEFAULT_VALUE = {
  iconChoices: {
    playerOneIcon: "",
    playerTwoIcon: "",
  },
  typeOfGame: "",
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
      } else {
        setTypeOfGame("Multiplayer");
      }
    } else return;
  };

  return (
    <GamePreferencesContext.Provider
      value={{ iconChoices, typeOfGame, chooseIcon, chooseTypeOfGame }}
    >
      {children}
    </GamePreferencesContext.Provider>
  );
};
