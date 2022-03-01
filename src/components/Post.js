import { useState } from 'react';

const Post = (props) => {
  const [nbLikes, setNbLikes] = useState(props.postData.likes);
  const [isLiked, setIsLiked] = useState(false);

  const likePost = () => {
    const increment = isLiked ? -1 : 1;
    setNbLikes(nbLikes + increment);
    setIsLiked(!isLiked);
  };

  return (
    <>
      <p>
        {props.postData.author} <br /> 💬{props.postData.text} <br />
        {nbLikes} likes <br />
        <button onClick={likePost}>
          {isLiked ? 'Vous aimez ce post' : "J'aime"}
        </button>
        <button onClick={() => props.deletePost(props.postData.id)}>supprimer le post</button>
        <br />
      </p>
    </>
  );
};

export default Post;
