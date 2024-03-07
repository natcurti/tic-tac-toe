import styled from "styled-components";

const CardResultsContainer = styled.div`
  width: 6rem;
  height: 4rem;
  background-color: ${(props) =>
    props.title === "X"
      ? "var(--blue)"
      : props.title === "Empates"
      ? "var(--off-white)"
      : "var(--yellow)"};
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

  @media (min-width: 480px) {
    width: 7rem;

    h2 {
      font-size: 0.875rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 768px) {
    width: 8rem;
  }
`;

interface ICardResults {
  title: string;
  result: number;
}

export const CardResults = ({ title, result }: ICardResults) => {
  return (
    <CardResultsContainer title={title}>
      <h2>{title}</h2>
      <p>{result}</p>
    </CardResultsContainer>
  );
};
