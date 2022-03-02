import { useState } from 'react';

const CreatePost = ({ addPost }) => {
  const [postText, setPostText] = useState('');
  const [postPicture, setPostPicture] = useState('');

  const onPostTextChangeHandler = (event) => {
    setPostText(event.target.value);
  };

  const onPostPictureChangeHandler = (event) => {
    setPostPicture(event.target.value);
  };


  const createPostHandler = (event) => {
    addPost(postText, postPicture);
    setPostText('')
    setPostPicture('')
  };

  return (
    <>
      <div> Nouveau post</div>
      Texte : <input type="text" onChange={onPostTextChangeHandler} value={postText}/> <br/>
      Image : <input type="text" onChange={onPostPictureChangeHandler} value={postPicture}/>
      {postText.trim() != '' && <button onClick={createPostHandler}>Publier</button>}
    </>
  );
};

export default CreatePost;
