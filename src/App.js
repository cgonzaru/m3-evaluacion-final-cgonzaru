import React, {Fragment} from 'react';
import {fetchCharacters} from './services/fetchCharacters';
import Filters from './components/Filters';
import CharacterList from './components/CharacterList';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import CharacterDetail from './components/CharacterDetail';

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

          <Switch>
            <Route exact path='/' render={ () => {
              return (
                <Fragment>
                  <Filters 
                    getUserInput={this.getUserInput}
                  />
                  <CharacterList 
                    characters={this.state.characters}
                    userInput={this.state.userInput}
                  />
                </Fragment>
              );
              }} 
            />

            <Route path='/detail/:characterId' render={ routerProps => {
              return (
                <CharacterDetail 
                  routerProps={routerProps}
                  characters={this.state.characters}
                />
              );
            }}
              
            />


          </Switch>

          {/* <Filters 
            getUserInput={this.getUserInput}
          />
          <CharacterList 
            characters={this.state.characters}
            userInput={this.state.userInput}
          /> */}
          
        </main>
      </div>
    );
  }
}

export default App;
