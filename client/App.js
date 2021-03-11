import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { CocktailList } from './components/CocktailList';
import { SearchBox } from './components/SearchBox';
import './styles.scss';


const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [cocktailList, setCocktailList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const result = await axios.get('/cocktails');
        setCocktailList(result.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchList();
  }, [searchInput])

  const handleChange = (e) => setSearchInput(e.target.value)

  const filteredCocktails = cocktailList.filter((cocktail) =>
    cocktail.name.toLowerCase().includes(searchInput.toLowerCase()))
  
    return (
    <div className="App">
      <header className="header">
        <h1>SHAKEN AND STIRRED</h1>
      </header>
      <SearchBox
        value={searchInput}
        handleChange={handleChange}></SearchBox>
      <CocktailList cocktails={filteredCocktails}></CocktailList>
    </div>
  )
}

export default App;
