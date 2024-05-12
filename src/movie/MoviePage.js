import React from "react";
import './MoviePage.css';
import { useState, useEffect } from "react";

function MoviePage() {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    // 여기서 영화 데이터를 가져오는 API 요청 등을 처리.
    // 임시로 더미 데이터를 사용.
    const dummyMovies = [
      { id: 1, title: 'Movie 1', imageUrl: 'http://file.koreafilm.or.kr/poster/99/18/14/DPF027716_01.jpg' },
      { id: 2, title: 'Movie 2', imageUrl: 'http://file.koreafilm.or.kr/poster/00/00/91/DPF000044_01.jpg' },
      { id: 3, title: 'Movie 3', imageUrl: 'http://file.koreafilm.or.kr/poster/00/03/89/DPF07121A_01.jpg' },
      { id: 4, title: 'Movie 4', imageUrl: 'http://file.koreafilm.or.kr/poster/00/01/72/DPK005647_01.JPG' },
      { id: 5, title: 'Movie 5', imageUrl: 'http://file.koreafilm.or.kr/poster/00/02/63/DPF006401_01.JPG' },
      { id: 6, title: 'Movie 6', imageUrl: 'https://via.placeholder.com/200' },
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