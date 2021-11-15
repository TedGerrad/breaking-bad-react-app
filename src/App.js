import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid' 
import Search from './components/ui/Search' 
import './App.css';


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState([true]) 
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
        )

      //console.log(result.data)
      
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
    
  }, [query])

  //"items" will be like an array representing the characters from breaking bad that are called by the API
  //"setItems" will be a function that we use to change the state of the items
  //"useState is a hook that will default to an empty array that will become populated when a request is made with the "useEffect" hook 
  //"isLoading" is the next piece of state that tells whether the data is being loaded or not.
  //"setIsLoading" will be a function to change the state of isLoading. This is set to "true" by default when the set is loading and "false" when it is finished loading 
  //"useEffect" takes an arrow function
  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
