export const towerBuilder = (nFloors: number): string[] => {
  const ITERATION_INCREMENT = 2;
  const ASTERISK_SYMBOL = '*';
  const SPACE_SYMBOL = ' ';

  // Amount of asterisk in bottom layer
  const finalAsteriskCount = nFloors * 2 - 1;

  // Current amount of asterisks
  let asteriskCount = 1;

  // Result array
  const result: string[] = [];

  for (let i = 0; i < nFloors; i++) {
    let asterisk = ASTERISK_SYMBOL.repeat(asteriskCount);
    const sideSpaceCount = calculateSideSpace(
      asteriskCount,
      finalAsteriskCount
    );
    const floor = insertSpace(asterisk, sideSpaceCount, SPACE_SYMBOL);
    result.push(floor);
    asteriskCount += ITERATION_INCREMENT;
  }

  return result;
};

function calculateSideSpace(
  amountOfAsterisks: number,
  bottomLayerAsterisksCount: number
): number {
  return (bottomLayerAsterisksCount - amountOfAsterisks) / 2;
}

function insertSpace(
  asterisks: string,
  spaceAmount: number,
  spaceSymbol: string
): string {
  const spaces = spaceSymbol.repeat(spaceAmount);
  return spaces + asterisks + spaces;
}
