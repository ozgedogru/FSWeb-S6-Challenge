// Karakter bileşeniniz buraya gelecek
import styled from "styled-components";

function CharacterList(props) {
  const { characters } = props;

  const Container = styled.div`
    max-width: 600px;
    text-align: center;
    margin: auto;
  `;

  return (
    <Container>
      <div>
        <nav>
          <div>Star Wars Major Character List</div>
          {characters.map((character) => (
            <div>
              <div>
                <span>{character.name}</span>
              </div>
              <div></div>
            </div>
          ))}
        </nav>
      </div>
    </Container>
  );
}

export default CharacterList;
