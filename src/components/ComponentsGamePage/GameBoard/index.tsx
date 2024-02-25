import styled from "styled-components";
import { CardGame } from "./CardGame";

const GameBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 1.25rem;
  width: 100%;
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
