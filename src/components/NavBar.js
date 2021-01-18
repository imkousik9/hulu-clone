import React from 'react';
import './NavBar.css';
import fetchUrl from '../requests';

function NavBar({ setSeledtedOtion }) {
  return (
    <div className="navBar">
      <h5 onClick={() => setSeledtedOtion(fetchUrl.fetchTrending)}>Trending</h5>
      <h5 onClick={() => setSeledtedOtion(fetchUrl.fetchTopRated)}>
        Top Rated
      </h5>
      <h5 onClick={() => setSeledtedOtion(fetchUrl.fetchActionMovies)}>
        Action
      </h5>
      <h5 onClick={() => setSeledtedOtion(fetchUrl.fetchComedyMovies)}>
        Comedy
      </h5>
      <h5 onClick={() => setSeledtedOtion(fetchUrl.fetchHorrorMovies)}>
        Horror
      </h5>
      <h5 onClick={() => setSeledtedOtion(fetchUrl.fetchRomanceMovies)}>
        Romance
      </h5>
      <h5 onClick={() => setSeledtedOtion(fetchUrl.fetchMystery)}>Mystery</h5>
      <h5 onClick={() => setSeledtedOtion(fetchUrl.fetchSciFi)}>Sci-fi</h5>
      <h5 onClick={() => setSeledtedOtion(fetchUrl.fetchWestern)}>Western</h5>
      <h5 onClick={() => setSeledtedOtion(fetchUrl.fetchAnimation)}>
        Animation
      </h5>
      <h5 onClick={() => setSeledtedOtion(fetchUrl.fetchTV)}>TV Movie</h5>
    </div>
  );
}

export default NavBar;
