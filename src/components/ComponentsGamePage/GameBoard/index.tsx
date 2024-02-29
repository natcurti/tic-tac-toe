import styled from "styled-components";
import { CardGame } from "./CardGame";
import { useContext } from "react";
import { WhoIsTurnContext } from "src/context/WhoIsTurnContext";

const GameBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 6rem);
  justify-content: space-between;
  gap: 1.25rem;
  width: 100%;

  @media (min-width: 480px) {
    grid-template-columns: repeat(3, 7rem);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 7.5rem);
  }
`;

const boardGame = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export const GameBoard = () => {
  const context = useContext(WhoIsTurnContext);

  const changeTurn = () => {
    if (context?.turn === "cross") {
      context?.setTurn("circle");
    } else {
      context?.setTurn("cross");
    }
    console.log(context?.turn);
  };

  return (
    <GameBoardContainer>
      {boardGame.map((number) => (
        <CardGame key={number} changeTurn={changeTurn} />
      ))}
    </GameBoardContainer>
  );
};
