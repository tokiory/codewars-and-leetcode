const ISBN_REGEX = /^[0-9]{9}([0-9]|X)$/gi;

export function validISBN10(isbn: string) {
  let index = 1;

  if (isbn.length < 10) {
    return false;
  }

  // https://stackoverflow.com/questions/1520800/why-does-a-regexp-with-global-flag-give-wrong-results
  // Reinitialize regex index
  ISBN_REGEX.lastIndex = 0;

  if (!ISBN_REGEX.test(isbn)) {
    return false;
  }

  return (
    isbn.split('').reduce((acc, item) => {
      if (item.toLowerCase() === 'x') {
        return acc + 10 * index++;
      }

      return acc + Number(item) * index++;
    }, 0) %
      11 ===
    0
  );
}
