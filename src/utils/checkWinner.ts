const victoryPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = (moves: number[]) => {
  let victoryArray: number[] = [];

  if (
    victoryPositions.some((array) => {
      if (array.every((number) => moves.includes(number))) {
        victoryArray = array;
        return victoryArray;
      }
    })
  ) {
    return victoryArray;
  } else return "";
};

export default checkWinner;
