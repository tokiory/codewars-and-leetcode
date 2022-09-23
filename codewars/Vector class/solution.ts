export class Vector {
  private _coordinates: number[];
  constructor(components: number[]) {
    this._coordinates = [...components];
  }

  get coordinates(): number[] {
    return this._coordinates;
  }

  add(v: Vector): Vector {
    
    // Check amount of coordinates
    this._checkForLength(v.coordinates.length);
    const sumCoordinates: number[] = [];
    for (let i = 0; i < this.coordinates.length; i++) {
      sumCoordinates.push(v.coordinates[i] + this._coordinates[i]);
    }

    return new Vector(sumCoordinates);
  }

  subtract(v: Vector): Vector {
    
    // Check amount of coordinates
    this._checkForLength(v.coordinates.length);
    const subtractCoordinates: number[] = [];
    for (let i = 0; i < this.coordinates.length; i++) {
      subtractCoordinates.push(this._coordinates[i] - v.coordinates[i]);
    }

    return new Vector(subtractCoordinates);
  }

  dot(v: Vector): number {

    // Check amount of coordinates
    this._checkForLength(v.coordinates.length);
    let result: number = 0;
    for (let i = 0; i < this.coordinates.length; i++) {
      result += this._coordinates[i] * v.coordinates[i];
    }

    return result;
  }

  norm(): number {
    return Math.sqrt(this._coordinates.reduce((acc, item) => {
      return acc + Math.pow(item, 2);
    }, 0));
  }

  equals(v: Vector): boolean {
    return v.toString() === this.toString();
  }

  toString(): string {
    return `(${this._coordinates.toString()})`
  }

  private _checkForLength(amountOfCoordinates: number): void | never {
    if (amountOfCoordinates !== this._coordinates.length) {
      throw new Error('Amount of coordinates should be ' + this._coordinates.length);
    }
  }
};