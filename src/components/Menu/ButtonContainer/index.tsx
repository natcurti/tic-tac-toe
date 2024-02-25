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

  @media (min-width: 480px) {
    width: 25.75rem;
  }

  @media (min-width: 768px) {
    width: 38rem;
  }
`;

const ButtonIcon = styled.button`
  display: grid;
  place-items: center;
  border-radius: 0.625rem;
  border: none;
  width: 8.25rem;
  height: 3.375rem;
  background-color: ${(props) =>
    props.id === "circle" ? "var(--off-white)" : "transparent"};
  transition: background-color 0.5s;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.id === "circle" ? "var(--white)" : "var(--medium-gray)"};
  }

  @media (min-width: 480px) {
    width: 12.375rem;
  }

  @media (min-width: 768px) {
    width: 18.5rem;
  }
`;

interface IContainerButton {
  iconCircle: string;
  iconCross: string;
  chooseIcon: (icon: string) => void;
}

export const ContainerButton = ({
  iconCircle,
  iconCross,
  chooseIcon,
}: IContainerButton) => {
  return (
    <ButtonContainer>
      <ButtonIcon id={iconCross} onClick={() => chooseIcon("cross")}>
        <img src={cross} />
      </ButtonIcon>
      <ButtonIcon id={iconCircle} onClick={() => chooseIcon("circle")}>
        <img src={circle} />
      </ButtonIcon>
    </ButtonContainer>
  );
};
