import { Button } from "src/components/Button";
import { Logo } from "src/components/Logo";
import { Menu } from "src/components/Menu";
import styled from "styled-components";
import { useState } from "react";
import { IconPreferences } from "src/types/IconPreferences";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Home = () => {
  const [iconChoices, setIconChoices] = useState<IconPreferences>({
    playerOneIcon: "",
    playerTwoIcon: "",
  });

  const [typeOfGame, setTypeOfGame] = useState<string>("");

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
    <>
      <header>
        <Logo />
      </header>
      <Menu chooseIcon={chooseIcon} />
      <SectionContainer>
        <Button gameType="CPU" chooseTypeOfGame={chooseTypeOfGame}>
          Jogue contra o computador
        </Button>
        <Button gameType="Multiplayer" chooseTypeOfGame={chooseTypeOfGame}>
          Multiplayer
        </Button>
      </SectionContainer>
    </>
  );
};
