import React from 'react';
import './NavBar.css';
import fetchUrl from '../requests';

function NavBar({ setSeledtedOtion }) {
  return (
    <div className="navBar">
      <h2 onClick={() => setSeledtedOtion(fetchUrl.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setSeledtedOtion(fetchUrl.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setSeledtedOtion(fetchUrl.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setSeledtedOtion(fetchUrl.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setSeledtedOtion(fetchUrl.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setSeledtedOtion(fetchUrl.fetchRomanceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setSeledtedOtion(fetchUrl.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setSeledtedOtion(fetchUrl.fetchSciFi)}>Sci-fi</h2>
      <h2 onClick={() => setSeledtedOtion(fetchUrl.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSeledtedOtion(fetchUrl.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setSeledtedOtion(fetchUrl.fetchTV)}>TV Movie</h2>
    </div>
  );
}

export default NavBar;
