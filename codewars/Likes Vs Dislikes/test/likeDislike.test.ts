import likeOrDislike, {LIKE_WORD, DISLIKE_WORD, NOTHING_WORD} from "../solution";

describe("Likes vs. Dislikes",() => {

  test('Description example tests', () => {
    expect(likeOrDislike([DISLIKE_WORD])).toBe(DISLIKE_WORD);
    expect(likeOrDislike([LIKE_WORD, LIKE_WORD])).toBe(NOTHING_WORD);
    expect(likeOrDislike([DISLIKE_WORD, LIKE_WORD])).toBe(LIKE_WORD);
    expect(likeOrDislike([LIKE_WORD, DISLIKE_WORD, DISLIKE_WORD])).toBe(NOTHING_WORD);
  });

  test('More example tests', () => {
    expect(likeOrDislike([DISLIKE_WORD, DISLIKE_WORD])).toBe(NOTHING_WORD);
    expect(likeOrDislike([LIKE_WORD, LIKE_WORD, LIKE_WORD])).toBe(LIKE_WORD);
    expect(likeOrDislike([LIKE_WORD, DISLIKE_WORD])).toBe(DISLIKE_WORD);
    expect(likeOrDislike([DISLIKE_WORD, LIKE_WORD, DISLIKE_WORD])).toBe(DISLIKE_WORD);
    expect(likeOrDislike([LIKE_WORD, LIKE_WORD, DISLIKE_WORD, LIKE_WORD, LIKE_WORD, LIKE_WORD, LIKE_WORD, DISLIKE_WORD])).toBe(DISLIKE_WORD);
    expect(likeOrDislike([])).toBe(NOTHING_WORD);
  });
});