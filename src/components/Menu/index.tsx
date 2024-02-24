import styled from "styled-components";
import { ContainerButton } from "./ButtonContainer";

const SectionContainer = styled.section`
  width: 20.5rem;
  height: 13rem;
  background-color: var(--medium-gray);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px -7px 0px 0px rgb(16, 33, 42);

  @media (max-width: 480px) {
    width: 28.75em;
  }
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--light-gray);
  letter-spacing: 0.25px;
`;

export const Menu = () => {
  return (
    <SectionContainer>
      <Title>Selecione o ícone do jogador 1</Title>
      <ContainerButton iconCircle="circle" />
      <Text>Lembre-se: o X começa o jogo </Text>
    </SectionContainer>
  );
};
