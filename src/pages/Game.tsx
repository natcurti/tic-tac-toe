import { Logo } from "src/components/ComponentsCommon/Logo";
import { CardTurn } from "src/components/ComponentsGamePage/CardTurn";
import { ButtonRestart } from "src/components/ComponentsGamePage/ButtonRestart";
import { GameBoard } from "src/components/ComponentsGamePage/GameBoard";
import { CardResults } from "src/components/ComponentsGamePage/CardResults";
import styled from "styled-components";
import { useContext } from "react";
import { VictoryContext } from "src/context/VictoryContext";
import Modal from "src/components/ComponentsGamePage/Modal";
import { GamePreferencesContext } from "src/context/GamePreferencesContext";

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

  const { playerChoices, iconChoices } = useContext(GamePreferencesContext);
  let cross = "";
  let circle = "";

  if (
    iconChoices.playerOneIcon === "cross" &&
    playerChoices.playerOne === "Person"
  ) {
    cross = "X (Você)";
    circle = "O (CPU)";
  } else if (
    iconChoices.playerOneIcon === "circle" &&
    playerChoices.playerOne === "Computer"
  ) {
    cross = "X (CPU)";
    circle = "O (Você)";
  } else {
    cross = "X";
    circle = "O";
  }

  console.log(playerChoices, iconChoices);

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
          <CardResults title={cross} result={allCrossVictories}></CardResults>
          <CardResults title="Empates" result={allTies}></CardResults>
          <CardResults title={circle} result={allCircleVictories}></CardResults>
        </ResultsContainer>
      </Main>
      {victory !== "" ? <Modal /> : null}
    </>
  );
};
