import React from "react";
import './MoviePage.css';
import { useState, useEffect } from "react";

function MoviePage() {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    // 여기서 영화 데이터를 가져오는 API 요청 등을 처리.
    // 임시로 더미 데이터를 사용.
    const dummyMovies = [
      { id: 1, title: 'Movie 1', imageUrl: 'https://via.placeholder.com/200' },
      { id: 2, title: 'Movie 2', imageUrl: 'https://via.placeholder.com/200' },
      { id: 3, title: 'Movie 3', imageUrl: 'https://via.placeholder.com/200' },
      { id: 4, title: 'Movie 4', imageUrl: 'https://via.placeholder.com/200' },
      { id: 5, title: 'Movie 5', imageUrl: 'https://via.placeholder.com/200' },
    ];

    setMovies(dummyMovies);
  }, []);

  return (
    <div className="movie-page">
      <h2>Watch Movies</h2>
      <div className="movie-list">
        {movies.map(movie => (
          <div className="movie" key={movie.id}>
            <img src={movie.imageUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviePage;