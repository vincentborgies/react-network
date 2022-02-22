const Post = (props) => {
  return (
    <p>
      {props.postData.author} <br /> 💬{props.postData.text} <br />
      {props.postData.likes} likes
    </p>
  );
};

export default Post;
