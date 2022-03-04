import Post from './Post';
import emptyImage from '../images/empty.png';
//import { ReactComponent as EmptyImageSvg} from '../images/empty.svg'

const Feed = ({ posts, deletePost, likePost, isLoading }) => {
  posts.sort((post1, post2) => post2.date.getTime() - post1.date.getTime());

  const loading = <div>Chargement...</div>;
  const contentPosts = (
    <>
      {posts.map((p) => (
        <Post
          key={p.id}
          postData={p}
          deletePost={deletePost}
          likePost={likePost}
        />
      ))}
    </>
  );

  const contentEmpty = (
    <>
      <h3 align='center'>
        {' '}
        {/*<img src={EmptyImage} width="6000" height="6000"/>*/}
        <img alt='empty' src={emptyImage} width='300' height='300' /> <br />
        Aucun post pour le moment
      </h3>
    </>
  );

  return isLoading ? loading : (posts.length > 0 ? contentPosts : contentEmpty);
};

export default Feed;
