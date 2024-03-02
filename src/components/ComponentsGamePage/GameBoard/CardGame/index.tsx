import styled from "styled-components";
import cross from "src/assets/img/x-blue.svg";
import circle from "src/assets/img/circle-yellow.svg";
import { useContext, useEffect, useState } from "react";
import { WhoIsTurnContext } from "src/context/WhoIsTurnContext";

const CardGameContainer = styled.div<{
  $iconHover: string;
  $isHovered: boolean;
}>`
  width: 6rem;
  height: 6rem;
  background-color: var(--medium-gray);
  box-shadow: inset 0px -5px 0px 0px rgb(16, 33, 42);
  border-radius: 0.625rem;
  display: grid;
  place-items: center;

  &:hover {
    cursor: pointer;
    background-image: ${(props) =>
      props.$isHovered && props.$iconHover === "cross"
        ? 'url("src/assets/img/cross-outlined.svg")'
        : props.$isHovered && props.$iconHover === "circle"
        ? 'url("src/assets/img/oval-outlined.svg")'
        : null};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 2.9rem;
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

    &:hover {
      background-size: 3.9rem;
    }
  }

  @media (min-width: 768px) {
    width: 7.5rem;
    height: 7.5rem;
  }
`;

export const CardGame = () => {
  const context = useContext(WhoIsTurnContext);
  const [cardIcon, setCardIcon] = useState("");
  const [iconHover, setIconHover] = useState("cross");
  const [isHovered, setIsHovered] = useState(true);

  const changeTurnAndAddIcon = () => {
    if (context?.turn === "cross") {
      setCardIcon(cross);
      context?.setTurn("circle");
    } else {
      setCardIcon(circle);
      context?.setTurn("cross");
    }
    setIsHovered(false);
  };

  useEffect(() => {
    if (context?.turn === "cross") {
      setIconHover("cross");
    } else {
      setIconHover("circle");
    }
  }, [context?.turn]);

  return (
    <CardGameContainer
      onClick={changeTurnAndAddIcon}
      $iconHover={iconHover}
      $isHovered={isHovered}
    >
      {cardIcon !== "" ? <img src={cardIcon} /> : null}
    </CardGameContainer>
  );
};
