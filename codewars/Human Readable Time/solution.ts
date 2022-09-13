export function humanReadable(seconds: number): string {
  const humanReadableTimeArray = [];

  // Hours
  humanReadableTimeArray.push(getHumanReadableHours(seconds));

  // Minutes
  humanReadableTimeArray.push(getHumanReadableMinutes(seconds));

  // Seconds
  humanReadableTimeArray.push(getHumanReadableSeconds(seconds));

  // Result time string
  const result = humanReadableTimeArray
    .map((timeString) => appendZero(timeString))
    .join(':');

  return result;
}

function getHumanReadableSeconds(seconds: number): number {
  return seconds % 60;
}

function getHumanReadableMinutes(seconds: number): number {
  return Math.floor((seconds / 60) % 60);
}

function getHumanReadableHours(seconds: number): number {
  return Math.floor(seconds / 60 / 60);
}

function appendZero(humanReadableDigit: number): string {
  let stringTime = `${humanReadableDigit}`;

  if (stringTime.length === 1) {
    stringTime = '0' + stringTime;
  }

  return stringTime;
}
