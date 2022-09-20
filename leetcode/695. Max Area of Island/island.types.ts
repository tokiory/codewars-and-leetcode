// Coordinates
export type MatrixCoordinateY = number;
export type MatrixCoordinateX = number;
export type MatrixCoordinates = [MatrixCoordinateY, MatrixCoordinateX];
export type UniqueCoordinatesStack = Set<MatrixCell>;
export type CoordinatesStack = MatrixCoordinates[];

// Type of matrix
export type Matrix<T> = Array<Array<T>>;

// Filled cell
export type MatrixCell = 0 | 1;

// Information for discovering islands
export interface MatrixSearchInfo<T> {
  grid: Matrix<T>,
  validCell: MatrixCell,
  coordinates: MatrixCoordinates,
  verifiedCells: CoordinatesStack
}