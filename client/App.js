import React, { Component } from 'react';
import { CocktailList } from './components/CocktailList';
import { SearchBox } from './components/SearchBox';
import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cocktailList: [],
      searchField: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('/cocktails')
      .then((res) => res.json())
      .then((cocktails) => {
        this.setState({ cocktailList: cocktails });
      })
      .catch((err) => console.log(err));
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { cocktailList, searchField } = this.state;
    const filteredCocktails = cocktailList.filter((cocktail) =>
      cocktail.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <header className="header">
          <h1>SHAKEN AND STIRRED</h1>
        </header>
        <SearchBox
          className="search-form"
          value={this.searchField}
          handleChange={this.handleChange}></SearchBox>
        <CocktailList cocktails={filteredCocktails}></CocktailList>
      </div>
    );
  }
}

export default App;
