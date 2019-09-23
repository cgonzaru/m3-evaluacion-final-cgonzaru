import React from 'react';
import {fetchCharacters} from './services/fetchCharacters';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    }


  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    fetchCharacters()
    .then(data => {
      this.setState({
        characters: data
      });
    });
  }

  render() {
    return (
      <div className="app">
        
      </div>
    );
  }
}

export default App;
