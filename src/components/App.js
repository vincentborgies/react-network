import { useState, useEffect } from 'react';
import Feed from './Feed';
import Header from './Header';
import CreatePost from './CreatePost';
import '../styles/App.css';

let initialPosts = [
  {
    id: 12,
    text: 'Bonjour tout le monde',
    author: 'Hugo Bordes',
    authorPicture: 'https://picsum.photos/seed/profile11/50/50',
    postPicture: 'https://picsum.photos/seed/postpicture-12/500/300',
    date: new Date(Date.now() - 1 * 3600 * 1000),
    likes: 42,
    isLiked: true,
  },
  {
    id: 55,
    text: 'Bonjour tout le monde',
    author: 'Antoine Morin',
    authorPicture: 'https://picsum.photos/seed/profile16/50/50',
    postPicture: 'https://picsum.photos/seed/postpicture-55/500/300',
    date: new Date(Date.now() - 3 * 3600 * 1000),
    likes: 35,
    isLiked: false,
  },
  {
    id: 90,
    text: 'Bonjour tout le monde',
    author: 'Léa Dumont',
    authorPicture: 'https://picsum.photos/seed/profile17/50/50',
    postPicture: 'https://picsum.photos/seed/postpicture-90/500/300',
    date: new Date(Date.now() - 2 * 3600 * 1000),
    likes: 17,
    isLiked: false,
  },
];

const bouchonBackend = () => {
  console.log('Backend start...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Backend return...');
      resolve(initialPosts);
    }, 2000);
  });
};

const currentUser = {
  author: 'Nouvel utilisateur',
  authorPicture: 'https://picsum.photos/seed/profile53/50/50',
};

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    bouchonBackend().then((posts) => {
      setPosts(posts)
      setIsLoading(false)
    });
  }, []);

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const addPost = (postText, postPicture) => {
    const newPost = {
      id: Math.floor(1000 * Math.random()),
      text: postText,
      author: currentUser.author,
      authorPicture: currentUser.authorPicture,
      postPicture,
      date: new Date(),
      likes: 0,
    };
    setPosts([...posts, newPost]);
  };

  const likePost = (id) => {
    const increment = posts.find((p) => p.id === id).isLiked ? -1 : 1;
    setPosts(
      posts.map((p) =>
        p.id === id
          ? { ...p, likes: p.likes + increment, isLiked: !p.isLiked }
          : p
      )
    );
  };

  return (
    <>
      <Header />
      <div className='center500px'>
        <CreatePost addPost={addPost} />
        <Feed posts={posts} deletePost={deletePost} likePost={likePost} isLoading={isLoading} />
      </div>
    </>
  );
};

export default App;
