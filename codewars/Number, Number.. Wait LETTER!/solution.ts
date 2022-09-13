export function doMath(sequence: string): number {
  const lowerCaseSequence = sequence.toLowerCase();
  const subsequencesList = getSubsequences(lowerCaseSequence);
  const sortedSubsequencesList = sortSubsequences(subsequencesList);
  const numbersFromSubsequences = getNumberFromSequences(
    sortedSubsequencesList
  );
  return calculateSequence(numbersFromSubsequences);
}

/**
 * Transform one big string with sequences into array with subsequences
 * @param sequence Sequence of letters with number
 * @returns Array of subsequences
 */
function getSubsequences(sequence: string): string[] {
  return sequence.split(' ');
}

export function sortSubsequences(sequenceList: string[]): string[] {
  return sequenceList.sort((left, right) => {
    const firstLetter = left.match(/[a-z]/);
    const secondLetter = right.match(/[a-z]/);

    if (!(firstLetter && secondLetter)) {
      throw new Error('There is no letter in sequence');
    }

    return firstLetter[0].charCodeAt(0) - secondLetter[0].charCodeAt(0);
  });
}

function getNumberFromSequences(sequenceList: string[]): number[] {
  return sequenceList.map((item) => {
    const letterIndex = item.search(/[a-z]/);
    return Number(item.slice(0, letterIndex) + item.slice(letterIndex + 1));
  });
}

function calculateSequence(numberSubsequence: number[]): number {
  // Operations sequence for calculating final result
  const OPERATIONS_SEQUENCE = ['+', '-', '*', '/'];

  let operationIndex = 0;

  return numberSubsequence.reduce((acc, item) => {
    if (operationIndex === 0) {
      operationIndex++;
      return item;
    }

    let result: number;
    switch ((operationIndex - 1) % OPERATIONS_SEQUENCE.length) {
      case 0:
        result = acc + item;
        break;

      case 1:
        result = acc - item;
        break;

      case 2:
        result = acc * item;
        break;

      default:
        result = acc / item;
        break;
    }

    operationIndex++;
    return Math.ceil(result);
  }, 0);
}
