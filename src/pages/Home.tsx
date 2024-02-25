import { Button } from "src/components/Button";
import { Logo } from "src/components/Logo";
import { Menu } from "src/components/Menu";
import styled from "styled-components";
import { useContext } from "react";
import { GamePreferencesContext } from "src/context/GamePreferencesContext";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Home = () => {
  const { iconChoices, typeOfGame, chooseTypeOfGame } = useContext(
    GamePreferencesContext
  );

  const showPreferences = () => {
    console.log(iconChoices, typeOfGame);
  };

  return (
    <>
      <header onClick={() => showPreferences()}>
        <Logo />
      </header>
      <Menu />
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
