export function generateHashtag(str: string) {
  if (/^\s*$/.test(str)) {
    return false;
  }

  const words = str
    .replace(/\s{2,}/, ' ')
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    });

  const hashtagDescription = words.join('');

  if (hashtagDescription.length >= 140) {
    return false;
  }

  return '#' + hashtagDescription;
}
