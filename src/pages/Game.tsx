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
  const { victory } = useContext(VictoryContext);

  let crossResults = 0;
  let circleResults = 0;
  const tieResults = 0;

  if (victory === "cross") {
    crossResults++;
  } else if (victory === "circle") {
    circleResults++;
  }

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
          <CardResults title="X" result={crossResults}></CardResults>
          <CardResults title="Empates" result={tieResults}></CardResults>
          <CardResults title="O" result={circleResults}></CardResults>
        </ResultsContainer>
      </Main>
      {victory !== "" ? <Modal /> : null}
    </>
  );
};
