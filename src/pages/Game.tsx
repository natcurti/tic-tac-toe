import { Logo } from "src/components/ComponentsCommon/Logo";
import { CardTurn } from "src/components/ComponentsGamePage/CardTurn";
import { ButtonRestart } from "src/components/ComponentsGamePage/ButtonRestart";
import { GameBoard } from "src/components/ComponentsGamePage/GameBoard";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Main = styled.main`
  width: 100%;
`;

export const GamePage = () => {
  return (
    <>
      <Header>
        <Logo />
        <CardTurn />
        <ButtonRestart />
      </Header>
      <Main>
        <GameBoard />
      </Main>
    </>
  );
};
