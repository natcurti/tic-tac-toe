import restart from "src/assets/img/restart.svg";
import styled from "styled-components";
import useRestartGame from "src/hooks/useRestartGame";

const ButtonContainer = styled.div`
  width: 4.5rem;
  display: flex;
  justify-content: end;

  @media (min-width: 480px) {
    width: 5.5rem;
  }
`;

const Button = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 0.35rem;
  background-color: var(--off-white);
  box-shadow: inset 0px -3px 0px 0px rgb(107, 137, 151);

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 480px) {
    width: 3.5rem;
    height: 3.5rem;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const ButtonRestart = () => {
  const restartGame = useRestartGame();

  return (
    <ButtonContainer>
      <Button onClick={restartGame}>
        <img src={restart} />
      </Button>
    </ButtonContainer>
  );
};
