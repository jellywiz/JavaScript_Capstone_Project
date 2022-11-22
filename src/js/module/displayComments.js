  const commentsDisplay = document.querySelectorAll(
    `[comment-id="${movie.id}"]`,
  )[0].parentElement.previousElementSibling;

  if (comments.length > 0) {
    commentBlock += '<h3>Comments</h3>';
    comments.forEach((comment) => {
      const date = comment.creation_date.split('-');
      const dateFormated = `${date[1]}/${date[2]}/${date[0]}`;
      commentBlock += `<p>${dateFormated} ${comment.username}: ${comment.comment}</p>`;
    });
  }
  commentsDisplay.insertAdjacentHTML('beforeend', commentBlock);

  updateCommentTitle(movie.id);

  const commentButton = document.querySelectorAll(
    `[comment-id="${movie.id}"]`,
  )[0];
  commentButton.addEventListener('click', async (e) => {
    const commentObject = {
      item_id: Number(e.target.getAttribute('comment-id')),
      username:
        commentButton.previousElementSibling.previousElementSibling.value,
      comment: commentButton.previousElementSibling.value,
    };

    if (commentObject.username && commentObject.comment) {
      const result = await createComment(commentObject);
      e.target.parentElement.children[1].innerHTML = ' ';
      if (result === 201) {
        const comments = await getComments(movieId);
        const lastComment = comments[comments.length - 1];
        const commentsDisplay = document.querySelectorAll(
          `[comment-id="${movie.id}"]`,
        )[0].parentElement.previousElementSibling;
        const date = lastComment.creation_date.split('-');
        const dateFormated = `${date[1]}/${date[2]}/${date[0]}`;

        if (comments.length === 1) {
          commentsDisplay.insertAdjacentHTML(
            'beforeend',
            `
            <h3>Comments</h3>
            <p>${dateFormated} ${lastComment.username}: ${lastComment.comment}</p>
          `,
          );
        } else {
          commentsDisplay.insertAdjacentHTML(
            'beforeend',
            `
            <p>${dateFormated} ${lastComment.username}: ${lastComment.comment}</p>
          `,
          );
        }
        updateCommentTitle(movie.id);
      }
    } else {
      e.target.parentElement.children[1].innerHTML = 'Username and comment required';
    }
  });
