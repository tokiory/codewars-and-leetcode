import BMI from "./solution";

const BMI_OK = "there is no excess weight";
const BMI_NOT_OK = "there is excess weight";

describe('BMI Calculator', function() {
  test('BMI is ok testing', function() {
    expect(new BMI(55, 1.60).calculateBMI()).toStrictEqual(BMI_OK);
    expect(new BMI(50, 1.75).calculateBMI()).toStrictEqual(BMI_OK);
    expect(new BMI(77, 1.76).calculateBMI()).toStrictEqual(BMI_OK);
  });
  
  test('BMI is not ok testing', function() {
    expect(new BMI(75, 1.70).calculateBMI()).toStrictEqual(BMI_NOT_OK);
    expect(new BMI(100, 1.70).calculateBMI()).toStrictEqual(BMI_NOT_OK);
  });
});