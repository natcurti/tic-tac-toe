import styled from "styled-components";
import circle from "src/assets/img/circle-dark.svg";
import cross from "src/assets/img/x-light.svg";

const ButtonContainer = styled.div`
  background-color: var(--dark-gray);
  border-radius: 0.625rem;
  width: 17.5rem;
  height: 4.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonIcon = styled.button`
  border-radius: 0.625rem;
  border: none;
  width: 8.25rem;
  height: 3.375rem;
  background-color: ${(props) =>
    props.id === "circle" ? "var(--off-white)" : "transparent"};
`;

interface IContainerButton {
  iconCircle: string;
}

export const ContainerButton = ({ iconCircle }: IContainerButton) => {
  return (
    <ButtonContainer>
      <ButtonIcon>
        <img src={cross} />
      </ButtonIcon>
      <ButtonIcon id={iconCircle}>
        <img src={circle} />
      </ButtonIcon>
    </ButtonContainer>
  );
};
