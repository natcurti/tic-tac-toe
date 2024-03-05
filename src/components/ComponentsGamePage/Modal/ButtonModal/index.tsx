import styled from "styled-components";

const ButtonContainer = styled.button`
  background-color: ${(props) =>
    props.title === "Sair" ? "var(--off-white)" : "var(--yellow)"};
  height: 3.25rem;
  font-family: "Outfit", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark-gray);
  padding: 0.75rem;
  text-transform: uppercase;
  border: none;
  border-radius: 0.625rem;
  box-shadow: inset 0px -5px 0px 0px ${(props) => (props.title === "Sair" ? "rgb(107, 137, 151)" : "rgb(204,139,19)")};
  transition: background 0.5s;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.title === "Sair" ? "var(--white)" : "var(--light-yellow)"};
  }
`;

interface IButtonModal {
  title: string;
  onClick?: () => void;
}

const ButtonModal = ({ title, onClick }: IButtonModal) => {
  return (
    <ButtonContainer title={title} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export default ButtonModal;
