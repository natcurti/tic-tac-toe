import styled from "styled-components";
import cross from "src/assets/img/x-blue.svg";
import circle from "src/assets/img/circle-yellow.svg";
import crossDark from "src/assets/img/cross-dark.svg";
import circleDark from "src/assets/img/circle-dark.svg";
import { useCallback, useContext, useEffect, useState } from "react";
import { WhoIsTurnContext } from "src/context/WhoIsTurnContext";
import { MovesContext } from "src/context/MovesContext";
import checkWinner from "src/utils/checkWinner";
import { VictoryContext } from "src/context/VictoryContext";
import { ComputerTurnContext } from "src/context/ComputerTurnContext";
import { GamePreferencesContext } from "src/context/GamePreferencesContext";

const CardGameContainer = styled.div<{
  $iconHover: string;
  $victory: string;
  $isWinnerCard: boolean;
  id: number;
  $disabled: boolean;
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
      !props.$disabled && props.$iconHover === "cross"
        ? 'url("src/assets/img/cross-outlined.svg")'
        : !props.$disabled && props.$iconHover === "circle"
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
  const { turn, setTurn } = useContext(WhoIsTurnContext);
  const { circleMoves, crossMoves, setCircleMoves, setCrossMoves } =
    useContext(MovesContext);
  const { victory, setVictory, endGame, setEndGame } =
    useContext(VictoryContext);
  const [cardIcon, setCardIcon] = useState("");
  const [iconHover, setIconHover] = useState("cross");
  const [disabled, setDisabled] = useState(false);
  const [isWinnerCard, setIsWinnerCard] = useState(false);
  const { isComputerTurn, setIsComputerTurn, randomId } =
    useContext(ComputerTurnContext);
  const { typeOfGame, playerChoices } = useContext(GamePreferencesContext);

  useEffect(() => {
    if (typeOfGame === "CPU") {
      if (playerChoices.playerOne === "Computer" && turn === "cross") {
        setIsComputerTurn(true);
      }
      if (playerChoices.playerOne === "Person" && turn === "circle") {
        setIsComputerTurn(true);
      }
    }
  }, [typeOfGame, setIsComputerTurn, playerChoices, turn]);

  const makeMove = useCallback(
    (id: number) => {
      if (turn === "cross") {
        setCardIcon(cross);
        setCrossMoves((previous) => [...previous, id]);
        setTurn("circle");
      } else {
        setCardIcon(circle);
        setCircleMoves((previous) => [...previous, id]);
        setTurn("cross");
      }
      setDisabled(true);
    },
    [turn, setTurn, setCrossMoves, setCircleMoves]
  );

  useEffect(() => {
    if (isComputerTurn && id === randomId && victory === "") {
      setIsComputerTurn(false);
      setTimeout(() => {
        makeMove(randomId);
      }, 500);
    }
  }, [id, isComputerTurn, randomId, makeMove, setIsComputerTurn, victory]);

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
    if (turn === "cross") {
      setIconHover("cross");
    } else {
      setIconHover("circle");
    }
  }, [turn]);

  useEffect(() => {
    if (circleMoves.length >= 3) {
      const winnerIsCircle = checkWinner(circleMoves);
      if (winnerIsCircle !== "") {
        styleVictoryCards("circle", winnerIsCircle);
        setVictory("circle");
      }
    }
    if (crossMoves.length >= 3) {
      const winnerIsCross = checkWinner(crossMoves);
      if (winnerIsCross !== "") {
        styleVictoryCards("cross", winnerIsCross);
        setVictory("cross");
      }
    }
    if (circleMoves.length + crossMoves.length === 9 && victory === "") {
      setVictory("Empate");
    }
  }, [
    circleMoves,
    crossMoves,
    styleVictoryCards,
    victory,
    setVictory,
    setIsComputerTurn,
    typeOfGame,
  ]);

  useEffect(() => {
    setCardIcon("");
    setDisabled(false);
    setIsWinnerCard(false);
    setEndGame(false);
  }, [endGame, setEndGame]);

  return (
    <CardGameContainer
      id={id}
      onClick={disabled ? () => {} : () => makeMove(id)}
      $disabled={disabled}
      $iconHover={iconHover}
      $isWinnerCard={isWinnerCard}
      $victory={victory}
    >
      {cardIcon !== "" ? <img src={cardIcon} /> : null}
    </CardGameContainer>
  );
};
