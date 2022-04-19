
import React, { useState } from 'react';
import './App.css';
import Result from './Components/Result.tsx';
import SearchInput from './Components/SearchInput.tsx'
import Header from './Components/Header.tsx';

function App() {

  const [userInput, setUserInput] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  return (


    <div className="App">
      <Header />
      <SearchInput userInput={userInput} setUserInput={setUserInput} setSearchResult={setSearchResult}/>
      <Result searchResult={searchResult} setSearchResult={setSearchResult}/>
    </div>


  );
}

export default App;


