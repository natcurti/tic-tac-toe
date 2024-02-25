import { Button } from "src/components/ComponentsHome/Button";
import { Logo } from "src/components/ComponentsCommon/Logo";
import { Menu } from "src/components/ComponentsHome/Menu";
import styled from "styled-components";
import { useContext } from "react";
import { GamePreferencesContext } from "src/context/GamePreferencesContext";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Home = () => {
  const { chooseTypeOfGame } = useContext(GamePreferencesContext);
  return (
    <>
      <header>
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
