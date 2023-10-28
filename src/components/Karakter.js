// Karakter bileşeniniz buraya gelecek

function CharacterList(props) {
  const { characters } = props;

  return (
    <div>
      {characters.map((character) => (
        <div key={character.mass}>{character.name}</div>
      ))}
    </div>
  );
}

export default CharacterList;
