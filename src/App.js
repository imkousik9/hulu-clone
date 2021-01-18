import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Results from './components/Results';
import fetchUrl from './requests';

function App() {
  const [selectedOption, setSeledtedOtion] = useState(fetchUrl.fetchTrending);

  return (
    <div className="app">
      <Header />
      <NavBar setSeledtedOtion={setSeledtedOtion} />

      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
