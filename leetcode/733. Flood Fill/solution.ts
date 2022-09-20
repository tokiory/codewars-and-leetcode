import { ImageCoordinates, ImageMatrix, ImageXCoordinate, ImageYCoordinate } from "./floodFill.types";

/**
 * Perform a flood fill on the image starting from the pixel
 * @param image Two dimensional array (matrix) with colors desctibed via numbers
 * @param sr Source row - initial row index
 * @param sc Source column - initial column index
 * @param color Color to transform all colors
 * @returns Transformed matrix
 */
export default function floodFill(image: ImageMatrix, sr: ImageXCoordinate, sc: ImageYCoordinate, color: number): ImageMatrix {
  let toFillStack: ImageCoordinates[] = [[sr, sc]];
  const INITIAL_COLOR = image[sr][sc];
  const verifiedCells: ImageCoordinates[] = [];

  // If starting cell is already colored in target color - return initial image matrix
  if (INITIAL_COLOR === color) {
    return image;
  }

  while (toFillStack.length) {
    const currentCoordinates = toFillStack.shift();

    if (!currentCoordinates) {
      break;
    }
    
    // Recolor our cell
    image[currentCoordinates[0]][currentCoordinates[1]] = color;

    // Adding our coordinate to verified list
    verifiedCells.push(currentCoordinates);

    // Searching for another cells
    toFillStack.push(...searchNearestCells(image, currentCoordinates, verifiedCells, INITIAL_COLOR));
  }

  return image;
};

/**
 * Searching coordinates for filling cells
 * @param image Image matrix
 * @param coordinates Coordinates, start search from
 * @param verifiedList Verified coordinates stack
 * @param color Searchable cells must be with this color
 * @returns New coordinates to fill
 */
function searchNearestCells(image: ImageMatrix, coordinates: ImageCoordinates, verifiedList: ImageCoordinates[], color: number): ImageCoordinates[] {
  const result: ImageCoordinates[] = [];
  let currentCoordinate: ImageCoordinates;

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
      IsValidCoordinates(currentCoordinate, verifiedList) &&
      image.at(currentCoordinate[0])?.at(currentCoordinate[1]) === color
    ) {
      result.push(currentCoordinate);
    }
  }
  return result;
}

/**
 * Validate coordinate
 * @param coordinates Coordinate from start to search
 * @param verifiedList Verified coordinates stack
 * @param max Maximum value of coordinate
 * @param min Minimum value of coordinate
 * @returns Is coordinate valid
 */
function IsValidCoordinates(coordinates: ImageCoordinates, verifiedList: ImageCoordinates[]): boolean {
  return !verifiedList.includes(coordinates) && coordinates.every(item => item >= 0);
}