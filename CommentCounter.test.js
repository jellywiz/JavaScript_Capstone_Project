import { commentCounter } from './src/js/module/callClass.js';

document.body.innerHTML = '<div class="comments"><h4 id"comments-header"></h4> </div>';
const commentsListSelector = document.querySelector('.comments');

describe('Comment counter', () => {
  test('Comment counter should return 0 if the list has no comments', () => {
    expect(commentCounter.getComments()).toEqual(0);
  });
  test('Comment counter should return 2 after adding one comment', () => {
    const newP = document.createElement('p');
    const newP1 = document.createElement('p');
    newP.textContent = 'Comment 1';
    newP.classList.add('comment');
    newP1.textContent = 'Comment 2';
    newP1.classList.add('comment');
    commentsListSelector.appendChild(newP);
    commentsListSelector.appendChild(newP1);
    expect(commentCounter.getComments()).toEqual(2);
  });
});