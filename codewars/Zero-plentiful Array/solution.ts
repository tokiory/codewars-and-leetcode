const ISLAND_SIZE = 4;
export default function zeroPlentiful(arr: number[]): number {
  const islands: number[] = []
  let currentIslandSize = 0;
  arr.forEach(item => {
    if (item === 0) {
      currentIslandSize++;
      return;
    }
    
    if (currentIslandSize !== 0) {
      islands.push(currentIslandSize);
      currentIslandSize = 0;
    }
  });

  if (currentIslandSize) {
    islands.push(currentIslandSize);
    currentIslandSize = 0;
  }

  return islands.every(size => size >= ISLAND_SIZE) ? islands.length : 0;
}