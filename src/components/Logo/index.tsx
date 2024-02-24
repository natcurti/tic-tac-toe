import circle from "src/assets/img/circle-yellow.svg";
import cross from "src/assets/img/x-blue.svg";
import styled from "styled-components";

const ContainerStyled = styled.div`
  display: flex;
  gap: 0.5rem;

  img {
    width: 2rem;
    height: 2rem;
  }
`;

export const Logo = () => {
  return (
    <ContainerStyled>
      <img src={cross} />
      <img src={circle} />
    </ContainerStyled>
  );
};
