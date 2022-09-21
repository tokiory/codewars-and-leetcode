const SNAKE_CASE_SPACER = '_';
export default function toUnderscore(pascalCaseSentence: any): string {

  if (typeof pascalCaseSentence !== 'string') {
    pascalCaseSentence = pascalCaseSentence.toString();
  }

  return pascalCaseSentence
    .replace(/(?!^[A-Za-z])[A-Z]/g, `${SNAKE_CASE_SPACER}$&`)
    .toLowerCase();
}
