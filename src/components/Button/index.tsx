import styled from "styled-components";

const ButtonContainer = styled.button`
  width: 20.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark-gray);
  text-transform: uppercase;
  background-color: ${(props) =>
    props.id === "CPU" ? "var(--yellow)" : "var(--blue)"};
  box-shadow: inset 0px -3px 0px 3px ${(props) => (props.id === "CPU" ? "rgba(204,139,19,1)" : "rgba(17,140,135,1)")};
  transition: background-color 0.5s;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.id === "CPU" ? "var(--light-yellow)" : "var(--light-blue)"};
  }
`;

interface IButton {
  gameType: string;
  children: React.ReactNode;
}

export const Button = ({ gameType, children }: IButton) => {
  return <ButtonContainer id={gameType}>{children}</ButtonContainer>;
};
