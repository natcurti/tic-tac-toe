import { Logo } from "src/components/ComponentsCommon/Logo";
import { CardTurn } from "src/components/ComponentsGamePage/CardTurn";
import { ButtonRestart } from "src/components/ComponentsGamePage/ButtonRestart";
import { GameBoard } from "src/components/ComponentsGamePage/GameBoard";
import { CardResults } from "src/components/ComponentsGamePage/CardResults";
import styled from "styled-components";
import { useContext } from "react";
import { VictoryContext } from "src/context/VictoryContext";
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
  const { victory, allCircleVictories, allCrossVictories, allTies } =
    useContext(VictoryContext);

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
          <CardResults title="X" result={allCrossVictories}></CardResults>
          <CardResults title="Empates" result={allTies}></CardResults>
          <CardResults title="O" result={allCircleVictories}></CardResults>
        </ResultsContainer>
      </Main>
      {victory !== "" ? <Modal /> : null}
    </>
  );
};
