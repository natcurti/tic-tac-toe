import styled from "styled-components";
import cross from "src/assets/img/x-blue.svg";
import circle from "src/assets/img/circle-yellow.svg";
import crossDark from "src/assets/img/cross-dark.svg";
import circleDark from "src/assets/img/circle-dark.svg";
import { useCallback, useContext, useEffect, useState } from "react";
import { WhoIsTurnContext } from "src/context/WhoIsTurnContext";
import { MovesContext } from "src/context/Moves";
import checkWinner from "src/utils/checkWinner";
import { VictoryContext } from "src/context/Victory";

const CardGameContainer = styled.div<{
  $iconHover: string;
  $isHovered: boolean;
  $victory: string;
  $isWinnerCard: boolean;
  id: number;
  disabled: boolean;
}>`
  width: 6rem;
  height: 6rem;
  background-color: ${(props) =>
    props.$victory === "cross" && props.$isWinnerCard === true
      ? "var(--light-blue)"
      : props.$victory === "circle" && props.$isWinnerCard === true
      ? "var(--yellow)"
      : "var(--medium-gray)"};
  box-shadow: inset 0px -5px 0px 0px ${(props) => (props.$victory === "cross" && props.$isWinnerCard === true ? "rgba(17,140,135,1)" : props.$victory === "circle" && props.$isWinnerCard === true ? "rgba(204,139,19,1)" : "rgb(16, 33, 42)")};
  border-radius: 0.625rem;
  display: grid;
  place-items: center;

  &:hover {
    cursor: pointer;
    background-image: ${(props) =>
      props.$isHovered && props.$iconHover === "cross"
        ? 'url("src/assets/img/cross-outlined.svg")'
        : props.$isHovered && props.$iconHover === "circle"
        ? 'url("src/assets/img/oval-outlined.svg")'
        : null};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 2.9rem;
  }

  img {
    width: 3rem;
    height: 3rem;
  }

  @media (min-width: 480px) {
    width: 7rem;
    height: 7rem;

    img {
      width: 4rem;
      height: 4rem;
    }

    &:hover {
      background-size: 3.9rem;
    }
  }

  @media (min-width: 768px) {
    width: 7.5rem;
    height: 7.5rem;
  }
`;

interface ICardGame {
  id: number;
}

export const CardGame = ({ id }: ICardGame) => {
  const turnContext = useContext(WhoIsTurnContext);
  const movesContext = useContext(MovesContext);
  const victoryContext = useContext(VictoryContext);
  const [cardIcon, setCardIcon] = useState("");
  const [iconHover, setIconHover] = useState("cross");
  const [isHovered, setIsHovered] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [isWinnerCard, setIsWinnerCard] = useState(false);

  const makeMove = (id: number) => {
    if (turnContext?.turn === "cross") {
      setCardIcon(cross);
      movesContext.setCrossMoves((previous) => [...previous, id]);
      turnContext?.setTurn("circle");
    } else {
      setCardIcon(circle);
      movesContext.setCircleMoves((previous) => [...previous, id]);
      turnContext?.setTurn("cross");
    }
    setIsHovered(false);
    setDisabled(true);
  };

  const styleVictoryCards = useCallback(
    (winner: string, cards: number[]) => {
      cards.map((item) => {
        if (item === id) {
          setIsWinnerCard(true);
          if (winner === "circle") {
            setCardIcon(circleDark);
          }
          if (winner === "cross") {
            setCardIcon(crossDark);
          }
        }
      });
    },
    [id]
  );

  useEffect(() => {
    if (turnContext?.turn === "cross") {
      setIconHover("cross");
    } else {
      setIconHover("circle");
    }
  }, [turnContext?.turn]);

  useEffect(() => {
    if (movesContext.circleMoves.length === 3) {
      const winnerIsCircle = checkWinner(movesContext.circleMoves);
      if (winnerIsCircle !== "") {
        styleVictoryCards("circle", winnerIsCircle);
        victoryContext.setVictory("circle");
      }
    }
    if (movesContext.crossMoves.length === 3) {
      const winnerIsCross = checkWinner(movesContext.crossMoves);
      if (winnerIsCross !== "") {
        styleVictoryCards("cross", winnerIsCross);
        victoryContext.setVictory("cross");
      }
    }
  }, [
    movesContext.circleMoves,
    movesContext.crossMoves,
    styleVictoryCards,
    victoryContext,
  ]);

  return (
    <CardGameContainer
      id={id}
      onClick={disabled ? () => {} : () => makeMove(id)}
      disabled={disabled}
      $iconHover={iconHover}
      $isHovered={isHovered}
      $isWinnerCard={isWinnerCard}
      $victory={victoryContext.victory}
    >
      {cardIcon !== "" ? <img src={cardIcon} /> : null}
    </CardGameContainer>
  );
};
