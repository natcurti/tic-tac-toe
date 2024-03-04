import { Logo } from "src/components/ComponentsCommon/Logo";
import { CardTurn } from "src/components/ComponentsGamePage/CardTurn";
import { ButtonRestart } from "src/components/ComponentsGamePage/ButtonRestart";
import { GameBoard } from "src/components/ComponentsGamePage/GameBoard";
import { CardResults } from "src/components/ComponentsGamePage/CardResults";
import styled from "styled-components";
import { useContext } from "react";
import { VictoryContext } from "src/context/Victory";
import Modal from "src/components/ComponentsGamePage/Modal";

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Main = styled.main`
  width: 100%;
`;

const ResultsContainer = styled.div`
  margin-top: 1.25rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const GamePage = () => {
  const victoryContext = useContext(VictoryContext);
  const winner = victoryContext.victory;

  return (
    <>
      <Header>
        <Logo />
        <CardTurn />
        <ButtonRestart />
      </Header>
      <Main>
        <GameBoard />
        <ResultsContainer>
          <CardResults title="X" result="10"></CardResults>
          <CardResults title="Empates" result="5"></CardResults>
          <CardResults title="O" result="10"></CardResults>
        </ResultsContainer>
      </Main>
      {winner !== "" ? <Modal /> : null}
    </>
  );
};
