import restart from "src/assets/img/restart.svg";
import styled from "styled-components";

const ButtonContainer = styled.div`
  width: 4.5rem;
  display: flex;
  justify-content: end;
`;

const Button = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 0.35rem;
  background-color: var(--off-white);
  box-shadow: inset 0px -3px 0px 0px rgb(107, 137, 151);
`;

export const ButtonRestart = () => {
  return (
    <ButtonContainer>
      <Button>
        <img src={restart} />
      </Button>
    </ButtonContainer>
  );
};
