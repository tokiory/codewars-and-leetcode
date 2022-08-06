const BRACES_TYPE = {
  "{": "}",
  "[": "]",
  "(": ")"
};

function getBracesPair(): [string, string][] {
  return Object.entries(BRACES_TYPE);
}

export function validBraces(braces: string): boolean {
  const bracesStack: string[] = [];
  
  for (let brace of braces) {

    if (isOpenBrace(brace)) {
      bracesStack.push(brace);
      continue;
    }

    if (bracesStack.length === 0) {
      return false;
    }

    const pairs = getBracesPair();
    const closePairIndex = getCloseBraceIndex(brace);
    if (pairs[closePairIndex][0] === bracesStack[bracesStack.length - 1]) {
      bracesStack.pop();
      continue;
    }

    return false;
  }

  return bracesStack.length === 0;
}

function isOpenBrace(brace: string) {
  const openBraces = Object.keys(BRACES_TYPE);
  let isOpen = false;

  openBraces.forEach(openBrace => {
    if (brace === openBrace) {
      isOpen = true;
    }
  });

  return isOpen;
}

function getCloseBraceIndex(brace: string): number {
  const closeBraces = Object.values(BRACES_TYPE);
  let index = 0;

  closeBraces.forEach((item, braceIndex) => {
    if (item == brace) {
      index = braceIndex;
    }
  });
  return index;
}