/**
 * Конструктор методов для isBadVersion
 * @param n Первая плохая версия
 */
export const isBadVersion = (n: number) => {
  return (version: number) => {
    return version >= n;
  };
};
