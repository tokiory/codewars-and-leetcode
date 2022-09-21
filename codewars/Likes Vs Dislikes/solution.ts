export const LIKE_WORD = 'Like';
export const DISLIKE_WORD = 'Dislike';
type ButtonType = typeof DISLIKE_WORD | typeof LIKE_WORD;
export const NOTHING_WORD = 'Nothing';

export default function likeOrDislike(buttons: ButtonType[]): ButtonType | typeof NOTHING_WORD {
  let isLike = 0;
  let isDislike = 0;
  buttons.forEach(item => {
    if (item === DISLIKE_WORD) {
      isLike = 0;
      isDislike = isDislike === 1 ? 0 : 1;
    }
    
    if (item === LIKE_WORD) {
      isDislike = 0;
      isLike = isLike === 1 ? 0 : 1;
    }
  });
  return isLike ? LIKE_WORD : isDislike ? DISLIKE_WORD : NOTHING_WORD;
}