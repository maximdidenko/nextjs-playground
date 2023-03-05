import { useState, useEffect, useContext } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

import NotificationContext from '../../store/notification-context';

function Comments(props) {
  const { eventId } = props;
  const { showNotification } = useContext(NotificationContext);

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const response = await fetch(`/api/comments/${eventId}`);
    const data = await response.json();

    setComments(data.comments);
  };

  useEffect(() => {
    fetchComments();
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    showNotification({
      title: 'Sending comment ...',
      message: 'We are saving your comment',
      status: 'pending',
    });

    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        showNotification({
          title: 'Success!',
          message: 'Your comment was sent',
          status: 'success',
        });
      })
      .catch(() => {
        showNotification({
          title: 'Error',
          message: 'Your comment was not saved ...',
          status: 'error',
        });
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
