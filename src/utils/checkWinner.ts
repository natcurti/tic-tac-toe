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

  victoryPositions.some((array) => {
    if (array.every((number, index) => number === moves[index])) {
      return (victoryArray = array);
    }
  });

  return victoryArray;
};

export default checkWinner;
