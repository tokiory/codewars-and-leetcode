interface Colors {
  r: number,
  g: number,
  b: number
};

export default function hexStringToRGB(hexString: string): Colors | void {

  if (hexString.length > 7 && hexString.length < 6) {
    const error = new Error('Invalid input hex string');
    console.error(error);
    return;
  }

  const colors: number[] = [];
  const onlyColor = hexString.replace('#', '');
  for (let i = 0; i < 3; i++) {
    colors.push(parseInt(onlyColor.slice(i * 2, (i * 2) + 2), 16));
  }
  
  return {r: colors[0], g: colors[1], b: colors[2]};
}