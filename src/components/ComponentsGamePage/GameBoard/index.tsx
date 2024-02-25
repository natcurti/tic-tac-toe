import styled from "styled-components";
import { CardGame } from "./CardGame";

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

export const GameBoard = () => {
  return (
    <GameBoardContainer>
      <CardGame></CardGame>
      <CardGame></CardGame>
      <CardGame></CardGame>
      <CardGame></CardGame>
      <CardGame></CardGame>
      <CardGame></CardGame>
      <CardGame></CardGame>
      <CardGame></CardGame>
      <CardGame></CardGame>
    </GameBoardContainer>
  );
};
