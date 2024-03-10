export const allMoves: number[] = [];

const verifyAvaliableCards = () => {
  const avaliableCards: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return avaliableCards.filter((number) =>
    allMoves.map((item) => number !== item)
  );
};

export const randomId = () => {
  const avaliableCards = verifyAvaliableCards();
  if (avaliableCards.length > 0) {
    const position = Math.floor(Math.random() * avaliableCards.length);
    return avaliableCards[position];
  } else return;
};
