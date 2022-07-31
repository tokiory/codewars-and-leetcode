export function isAValidMessage(message: string): boolean {
  const messageParts = splitMessageIntoParts(message);

  // If we don't have any parts and initial length of message isn't equal zero
  if (
    messageParts?.join("").length !== message.length &&
    message.length !== 0
  ) {
    return false;
  }

  const isWordsCorrect = isMessageCorrect(messageParts);
  return isWordsCorrect;
}

function splitMessageIntoParts(message: string): RegExpMatchArray | null {
  const OBJECT_REGEX = /\d+\D+/g;
  return message.match(OBJECT_REGEX);
}

function isMessageCorrect(messageParts: RegExpMatchArray | null): boolean {
  if (messageParts === null) {
    return true;
  }
  const isMessageCorrect = messageParts.every((partOfMessage) => {
    const firstLetterIndex = partOfMessage.search(/\D/g);
    const expectedLength = partOfMessage.slice(0, firstLetterIndex);
    const word = partOfMessage.slice(firstLetterIndex);

    return word.length === +expectedLength;
  });

  return isMessageCorrect;
}
