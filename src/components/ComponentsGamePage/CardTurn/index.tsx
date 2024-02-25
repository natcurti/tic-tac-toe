import circle from "src/assets/img/circle-light.svg";
// import cross from "src/assets/img/x-light.svg";
import styled from "styled-components";

const CardTurnContainer = styled.div`
  background-color: var(--medium-gray);
  box-shadow: inset 0px -3px 0px 0px rgb(16, 33, 42);
  border-radius: 0.35rem;
  width: 7rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  p {
    font-size: 0.725rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  img {
    width: 1rem;
    height: 1rem;
  }
`;

export const CardTurn = () => {
  return (
    <CardTurnContainer>
      <p>É a vez do: </p>
      <div>
        <img src={circle} />
      </div>
    </CardTurnContainer>
  );
};
