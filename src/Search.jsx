import React, { useState } from 'react';
import axios from 'axios';
import SingleMovie from './SingleMovie';

const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      setMovies(response.data.results);
      setSelectedMovie(null);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>

      {movies.map((movie) => (
        <div key={movie.id} onClick={() => handleSelectMovie(movie)}>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      ))}

      {selectedMovie && <SingleMovie movie={selectedMovie} />}
    </div>
  );
};

export default Search;
