export function revRot(s: string, sz: number): string {
  if (sz <= 0 || s.length < sz) {
    return "";
  }

  const preparedInput = prepareInput(s, sz);
  const chunks = createChunks(preparedInput, sz);
  const result: string[] = [];

  for (let chunk of chunks) {
    const isCubesSumEven = isChunkCubeEven(chunk);

    if (isCubesSumEven) {
      result.push(chunk.split("").reverse().join(""));
    } else {
      result.push(chunk.slice(1) + chunk[0]);
    }
  }
  return result.join("");
}

function prepareInput(input: string, chunkSize: number): string {
  const unusedSymbolsAmount = input.length % chunkSize;

  if (unusedSymbolsAmount === 0) {
    return input;
  }

  return input.slice(0, -unusedSymbolsAmount);
}

function createChunks(preparedString: string, chunkSize: number): string[] {
  const amountOfChunks = preparedString.length / chunkSize;
  const chunks: string[] = [];
  for (let i = 0; i < amountOfChunks; i++) {
    chunks.push(preparedString.slice(i * chunkSize, (i + 1) * chunkSize));
  }

  return chunks;
}

function isChunkCubeEven(chunk: string) {
  const chunkDigits = chunk.split("").map(Number);
  let cubesSum = chunkDigits.reduce((acc, digit) => {
    return acc + Math.pow(digit, 3);
  }, 0);
  return cubesSum % 2 === 0;
}
