import Post from './Post';
import Header from './Header';

const posts = [
  { id: 12, text: 'Bonjour tout le monde', author: 'Hugo Bordes', likes: 42 },
  { id: 55, text: 'Bonjour tout le monde', author: 'Antoine Morin', likes: 35 },
  { id: 90, text: 'Bonjour tout le monde', author: 'Léa Dumont', likes: 17 },
];

const App = () => {
  return (
    <>
      <Header />
      <h3>Fil d'actualité :</h3>

      {posts.map((p) => (
        <Post key={p.id} postData={p} />
      ))}
    </>
  );
};

export default App;
