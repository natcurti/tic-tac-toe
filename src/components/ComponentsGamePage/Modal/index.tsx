import { useContext, useEffect, useState } from "react";
import { VictoryContext } from "src/context/Victory";
import styled from "styled-components";
import ButtonModal from "./ButtonModal";
import { GamePreferencesContext } from "src/context/GamePreferencesContext";
import circle from "src/assets/img/circle-yellow.svg";
import cross from "src/assets/img/x-blue.svg";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
`;

const ModalContainer = styled.div<{ $winner: string }>`
  width: 100%;
  height: 14.25rem;
  background-color: var(--medium-gray);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Modal = () => {
  const victoryContext = useContext(VictoryContext);
  const winner = victoryContext.victory;
  const { iconChoices } = useContext(GamePreferencesContext);
  let whoIsWinner: string = "";
  if (iconChoices.playerOneIcon === winner) {
    whoIsWinner = "Jogador 1";
  } else {
    whoIsWinner = "Jogador 2";
  }
  const [winnerIcon, setWinnerIcon] = useState("");

  useEffect(() => {
    if (winner === "cross") {
      setWinnerIcon(cross);
    } else if (winner === "circle") {
      setWinnerIcon(circle);
    }
  }, [winner]);

  return (
    <ModalBackground>
      <ModalContainer $winner={winner}>
        <p>{whoIsWinner} venceu!</p>
        <div>
          <img src={winnerIcon} alt="Símbolo Vencedor" />
          <p>ganhou essa rodada!</p>
        </div>
        <div>
          <ButtonModal title="Sair" />
          <ButtonModal title="Jogar novamente" />
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
