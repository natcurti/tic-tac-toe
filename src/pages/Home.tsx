import { Button } from "src/components/Button";
import { Logo } from "src/components/Logo";
import { Menu } from "src/components/Menu";
import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Home = () => {
  return (
    <>
      <header>
        <Logo />
      </header>
      <Menu />
      <SectionContainer>
        <Button gameType="CPU">Jogue contra o computador</Button>
        <Button gameType="Player">Multiplayer</Button>
      </SectionContainer>
    </>
  );
};
