import styled from "styled-components";

const CardGameContainer = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: var(--medium-gray);
  box-shadow: inset 0px -5px 0px 0px rgb(16, 33, 42);
  border-radius: 0.625rem;
`;

export const CardGame = () => {
  return <CardGameContainer></CardGameContainer>;
};
