const Header = (props) => {
  let title = 'React Network';

  const onClickHandler = () => {
    console.log('Bouton cliqué');
  };

  return (
    <>
      <h1>{title}</h1>
      <button onClick={onClickHandler}>Cliquez ici</button>
    </>
  );
};
export default Header;
