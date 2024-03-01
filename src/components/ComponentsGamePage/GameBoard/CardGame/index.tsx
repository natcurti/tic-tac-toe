import styled from "styled-components";
import cross from "src/assets/img/x-blue.svg";
import circle from "src/assets/img/circle-yellow.svg";
import { useContext, useState } from "react";
import { WhoIsTurnContext } from "src/context/WhoIsTurnContext";

const CardGameContainer = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: var(--medium-gray);
  box-shadow: inset 0px -5px 0px 0px rgb(16, 33, 42);
  border-radius: 0.625rem;
  display: grid;
  place-items: center;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 3rem;
    height: 3rem;
  }

  @media (min-width: 480px) {
    width: 7rem;
    height: 7rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  @media (min-width: 768px) {
    width: 7.5rem;
    height: 8rem;
  }
`;

export const CardGame = () => {
  const context = useContext(WhoIsTurnContext);
  const [cardIcon, setCardIcon] = useState("");

  const changeTurnAndAddIcon = () => {
    if (context?.turn === "cross") {
      setCardIcon(cross);
      context?.setTurn("circle");
    } else {
      setCardIcon(circle);
      context?.setTurn("cross");
    }
  };

  return (
    <CardGameContainer onClick={changeTurnAndAddIcon}>
      {cardIcon !== "" ? <img src={cardIcon} /> : null}
    </CardGameContainer>
  );
};
