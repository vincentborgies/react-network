import '../styles/App.scss'
import { useState } from 'react';
import Feed from './Feed';
import Header from './Header';
import CreatePost from './CreatePost';

let initialPosts = [
  {
    id: 12,
    text: 'Bonjour tout le monde',
    author: 'Hugo Bordes',
    authorPicture: 'https://picsum.photos/seed/profile11/50/50',
    postPicture: 'https://picsum.photos/seed/postpicture-12/500/300',
    date: new Date(Date.now() - 1 * 3600 * 1000),
    likes: 42,
  },
  {
    id: 55,
    text: 'Bonjour tout le monde',
    author: 'Antoine Morin',
    authorPicture: 'https://picsum.photos/seed/profile16/50/50',
    postPicture: 'https://picsum.photos/seed/postpicture-55/500/300',
    date: new Date(Date.now() - 3 * 3600 * 1000),
    likes: 35,
  },
  {
    id: 90,
    text: 'Bonjour tout le monde',
    author: 'Léa Dumont',
    authorPicture: 'https://picsum.photos/seed/profile17/50/50',
    postPicture: 'https://picsum.photos/seed/postpicture-90/500/300',
    date: new Date(Date.now() - 2 * 3600 * 1000),
    likes: 17,
  },
];

const currentUser = {
  author: "Nouvel utilisateur",
  authorPicture:"https://picsum.photos/seed/profile53/50/50",
}

const App = () => {
  const [posts, setPosts] = useState(initialPosts);

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

  return (
    <>
      <Header />
      <CreatePost addPost={addPost} />
      <Feed posts={posts} deletePost={deletePost} />
    </>
  );
};

export default App;
