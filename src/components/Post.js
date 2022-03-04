import { useState } from 'react';
import moment from 'moment';

const Post = ({ postData, deletePost, likePost }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu)

  return (
    <div className='post'>
      <div className='post-header'>
        <div className='post-header_left'>
          <img className='post-profilepic' src={postData.authorPicture} alt="Profile picture"/>
          <br />
          <div>
            <div className='post-author'>{postData.author}</div>
            <div className='post-time'>
              {moment(postData.date).format('HH:mm')}
            </div>
          </div>
        </div>

        <div className='post-menu' onClick={toggleMenu}>...
        <div onClick={() => deletePost(postData.id)} className={`post-popup ${showMenu ? '' : 'hidden'}`}>Supprimer</div>
        </div>
      </div>
      <div className='post-text'>
        {postData.text} <br />
      </div>
      <div className='post-picture'>
        <img src={postData.postPicture} alt="Post picture"/> <br />
      </div>
      <div className='post-footer'>
        <span onClick={() => likePost(postData.id)} className={`post-likes ${postData.isLiked ? 'liked' : ''}`}>
          <span className='post-thumb'>👍 </span>
          <span>{postData.likes}</span>
        </span>
      </div>
    </div>
  );
};

export default Post;
