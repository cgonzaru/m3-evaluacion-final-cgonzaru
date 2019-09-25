import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import {fetchCharacters} from './services/fetchCharacters';
import Filters from './components/Filters';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      userInput: '',
      gender: 'all',
      origin: 'all'
    }

    this.getUserInput = this.getUserInput.bind(this);
    this.getGender = this.getGender.bind(this);
    this.getOrigin = this.getOrigin.bind(this);

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

  getGender(event) {
    const newGender = event.currentTarget.value;

    this.setState({
      gender: newGender
    })
  }

  getOrigin(event) {
    const newOrigin = event.currentTarget.value;

    this.setState({
      origin: newOrigin
    })
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="title">Rick and Morty</h1>
        </header>
        
        <main className="app__main">

          <Switch>
            <Route exact path='/' render={ () => {
              return (
                <Fragment>
                  <Filters 
                    getUserInput={this.getUserInput}
                    getGender={this.getGender}
                    getOrigin={this.getOrigin}
                  />
                  <CharacterList 
                    characters={this.state.characters}
                    userInput={this.state.userInput}
                    gender={this.state.gender}
                    origin={this.state.origin}
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
          
        </main>
      </div>
    );
  }
}

export default App;
