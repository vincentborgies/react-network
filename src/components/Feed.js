import { useState } from 'react';
import Post from './Post';
//import emptyImage from '../images/empty.png';
import { ReactComponent as EmptyImageSvg} from '../images/empty.svg'

let initialPosts = [
  { id: 12, text: 'Bonjour tout le monde', author: 'Hugo Bordes', likes: 42 },
  { id: 55, text: 'Bonjour tout le monde', author: 'Antoine Morin', likes: 35 },
  { id: 90, text: 'Bonjour tout le monde', author: 'Léa Dumont', likes: 17 },
];

const Feed = (props) => {
  const [posts, setPosts] = useState(initialPosts);

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id != id));
  };

  return (
    <>
      {/*<h3>Fil d'actualité :</h3>
      {posts.map((p) => (
        <Post key={p.id} postData={p} deletePost={deletePost} />
      ))}*/}

      <h3 align="center">
        {' '}
        {/*<img src={EmptyImage} width="6000" height="6000"/>*/}
        <EmptyImageSvg width="6000" height="6000"/>
        Aucun post pour le moment
      </h3>²
    </>
  );
};

export default Feed;
