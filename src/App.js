import React from 'react';
import {fetchCharacters} from './services/fetchCharacters';
import Filters from './components/Filters';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      userInput: ''
    }

    this.getUserInput = this.getUserInput.bind(this);

  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    fetchCharacters()
    .then(data => {
      this.setState({
        characters: data.results
      });
    });
  }

  getUserInput(event) {
    const value = event.currentTarget.value;

    this.setState({
      userInput: value
    })
  }

  render() {
    return (
      <div className="app">
        <header className="app__t"><h1 className="title">Rick and Morty</h1></header>
        <main className="app__main">
          <Filters 
            getUserInput={this.getUserInput}
          />
          <ul className="characters-list">
            {this.state.characters
              .filter(character => character.name.toUpperCase().includes(this.state.userInput.toUpperCase()))
              .map(item => {
              return (
                <li className="character" key={item.id}>
                  <div className="character-card">
                    <img src={item.image} alt={item.name} className="character-img"/>
                    <h2 className="character-name">{item.name}</h2>
                    <p className="character-specie">{item.species}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
