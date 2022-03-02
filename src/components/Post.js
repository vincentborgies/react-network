import { useState } from 'react';
import moment from 'moment';

const Post = ({ postData, deletePost }) => {
  const [nbLikes, setNbLikes] = useState(postData.likes);
  const [isLiked, setIsLiked] = useState(false);

  const likePost = () => {
    const increment = isLiked ? -1 : 1;
    setNbLikes(nbLikes + increment);
    setIsLiked(!isLiked);
  };

  console.log('postData', postData);

  return (
    <p>
      <img src={postData.authorPicture} />
      <br />
      {postData.author} <br />
      {moment(postData.date).format('HH:mm')}
      <br />
      💬{postData.text} <br />
      <img src={postData.postPicture} /> <br />
      {nbLikes} likes <br />
      <button onClick={likePost}>
        {isLiked ? 'Vous aimez ce post' : "J'aime"}
      </button>
      <button onClick={() => deletePost(postData.id)}>supprimer le post</button>
      <br />
    </p>
  );
};

export default Post;
