import styled from "styled-components";

const CardResultsContainer = styled.div`
  width: 6rem;
  height: 4rem;
  background-color: var(--blue);
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  h2,
  p {
    color: var(--dark-gray);
    text-align: center;
    text-transform: uppercase;
  }

  h2 {
    font-weight: 600;
    font-size: 0.75rem;
  }

  p {
    font-weight: 700;
    font-size: 1.25rem;
  }
`;

export const CardResults = () => {
  return (
    <CardResultsContainer>
      <h2>X (Você)</h2>
      <p>20</p>
    </CardResultsContainer>
  );
};
