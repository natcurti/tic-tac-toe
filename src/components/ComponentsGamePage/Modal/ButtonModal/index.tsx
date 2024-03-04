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
`;

interface IButtonModal {
  title: string;
}

const ButtonModal = ({ title }: IButtonModal) => {
  return <ButtonContainer title={title}>{title}</ButtonContainer>;
};

export default ButtonModal;
