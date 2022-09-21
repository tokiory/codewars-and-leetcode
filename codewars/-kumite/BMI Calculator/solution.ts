export default class BMI {
  private _height: number;
  private _weight: number;
  
  constructor(weight: number, height: number) {
    this._height = height;
    this._weight = weight;
  }
  
  set height(height: number) {
    if (height <= 0) {
      const invalidValueError = new Error('Invalid value');
      console.error(invalidValueError);
    }
    this._height = height;
  }
  
  set width(weight: number) {
    if (weight <= 0) {
      const invalidValueError = new Error('Invalid value');
      console.error(invalidValueError);
    }

    this._weight = weight;
  }
  
  get bmi(): number {
    return Number((this._weight / Math.pow(this._height, 2)).toFixed(2));
  }
  
  calculateBMI(): string {
    return `there is ${this.bmi < 25 ? 'no ' : ''}excess weight`;
  }
}