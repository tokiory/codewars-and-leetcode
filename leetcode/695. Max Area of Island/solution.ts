import { Matrix, CoordinatesStack, MatrixCoordinates, MatrixCell, MatrixSearchInfo } from './island.types';
export default function maxAreaOfIsland(grid: Matrix<MatrixCell>): number {
  let maximumIslandSize = 0;
  const verifiedCells: CoordinatesStack = [];

  if (grid.length === 0 || grid.at(0)?.length === 0) {
    return 0;
  }

  for (let currentRow = 0; currentRow < grid.length; currentRow++) {
    for (let currentColumn = 0; currentColumn < grid[0].length; currentColumn++) {
      if (
        !verifiedCells.includes([currentRow, currentColumn]) &&
        grid[currentRow][currentColumn] === 1
      ) {
        const newIslandCoordinates: CoordinatesStack = dfs({
          grid,
          coordinates: [currentRow, currentColumn],
          validCell: 1,
          verifiedCells,
        });
        maximumIslandSize = Math.max(
          maximumIslandSize,
          newIslandCoordinates.length
        );
        verifiedCells.push(...newIslandCoordinates);
      }
    }
  }
  return maximumIslandSize;
}

function dfs({grid, coordinates, validCell}: MatrixSearchInfo<MatrixCell>): CoordinatesStack {
  const stack: CoordinatesStack = [coordinates];
  const verified: CoordinatesStack = [];

  while(stack.length) {
    const currentCoordinate = stack.pop();

    if (!currentCoordinate) {
      break;
    }

    grid[currentCoordinate[0]][currentCoordinate[1]] = 0;

    verified.push(currentCoordinate);
    const discoveredIslands = discoverIsland({
      grid,
      coordinates: currentCoordinate,
      validCell,
      verifiedCells: verified,
    }).filter((item) => {
      return (
        verified.every(
          (verifiedItem) => verifiedItem.toString() !== item.toString()
        ) &&
        stack.every((stackItem) => stackItem.toString() !== item.toString())
      );
    });

    stack.push(...discoveredIslands);
  }

  return verified;
}

function discoverIsland({grid, coordinates, validCell, verifiedCells}: MatrixSearchInfo<MatrixCell>): CoordinatesStack {
  const result: CoordinatesStack = [];
  let currentCoordinate: MatrixCoordinates;

  // Searching for coordinate
  for (let i = 0; i < 4; i++) {
    switch (i) {
      case 0:
        currentCoordinate = [coordinates[0], coordinates[1] - 1];
        break;
      case 1:
        currentCoordinate = [coordinates[0], coordinates[1] + 1];
        break;
      case 2:
        currentCoordinate = [coordinates[0] - 1, coordinates[1]];
        break;
      default:
        currentCoordinate = [coordinates[0] + 1, coordinates[1]];
    }

    if (
      !verifiedCells.includes(currentCoordinate) &&
      currentCoordinate.every((item) => item >= 0) &&
      grid.at(currentCoordinate[0])?.at(currentCoordinate[1]) === validCell
    ) {
      result.push(currentCoordinate);
    }
  }
  return result;
}