import { useContext, useEffect, useState } from "react";
import { VictoryContext } from "src/context/VictoryContext";
import styled from "styled-components";
import ButtonModal from "./ButtonModal";
import { GamePreferencesContext } from "src/context/GamePreferencesContext";
import circle from "src/assets/img/circle-yellow.svg";
import cross from "src/assets/img/x-blue.svg";
import useRestartGame from "src/hooks/useRestartGame";
import useNewRound from "src/hooks/useNewRound";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
`;

const ModalContainer = styled.div<{ $winner: string; $modalText: string }>`
  width: 100%;
  height: 14.25rem;
  background-color: var(--medium-gray);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  p {
    text-transform: uppercase;
    font-size: ${(props) =>
      props.$modalText === "Empate" ? "2rem" : "0.875rem"};
    font-weight: 700;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    p {
      color: ${(props) =>
        props.$winner === "circle" ? "var(--yellow)" : "var(--blue)"};
      font-size: 1.5rem;
    }
  }
`;

const Modal = () => {
  const { victory } = useContext(VictoryContext);
  const { iconChoices } = useContext(GamePreferencesContext);
  let modalText: string = "";
  if (iconChoices.playerOneIcon === victory) {
    modalText = "Jogador 1";
  } else if (iconChoices.playerTwoIcon === victory) {
    modalText = "Jogador 2";
  } else {
    modalText = "Empate";
  }

  const [winnerIcon, setWinnerIcon] = useState("");
  const restartGame = useRestartGame();
  const newRound = useNewRound();

  useEffect(() => {
    if (victory === "cross") {
      setWinnerIcon(cross);
    } else if (victory === "circle") {
      setWinnerIcon(circle);
    }
  }, [victory]);

  return (
    <ModalBackground>
      <ModalContainer $winner={victory} $modalText={modalText}>
        {modalText === "Empate" ? (
          <p>{modalText}</p>
        ) : (
          <p>{modalText} venceu!</p>
        )}
        {modalText === "Jogador 1" || modalText === "Jogador 2" ? (
          <div>
            <img src={winnerIcon} alt="Símbolo Vencedor" />
            <p>ganhou essa rodada!</p>
          </div>
        ) : null}
        <div>
          <ButtonModal title="Sair" onClick={restartGame} />
          <ButtonModal title="Jogar novamente" onClick={newRound} />
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
