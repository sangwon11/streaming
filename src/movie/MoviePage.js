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
      { id: 7, title: 'Movie 7', imageUrl: 'https://via.placeholder.com/200' },
      { id: 8, title: 'Movie 8', imageUrl: 'https://via.placeholder.com/200' },
      { id: 9, title: 'Movie 9', imageUrl: 'https://via.placeholder.com/200' },
      { id: 10, title: 'Movie 10', imageUrl: 'https://via.placeholder.com/200' },
      { id: 11, title: 'Movie 11', imageUrl: 'https://via.placeholder.com/200' },
      { id: 12, title: 'Movie 12', imageUrl: 'https://via.placeholder.com/200' },
      { id: 13, title: 'Movie 13', imageUrl: 'https://via.placeholder.com/200' },
      { id: 14, title: 'Movie 14', imageUrl: 'https://via.placeholder.com/200' },
      { id: 15, title: 'Movie 15', imageUrl: 'https://via.placeholder.com/200' },
      { id: 16, title: 'Movie 16', imageUrl: 'https://via.placeholder.com/200' },
      { id: 17, title: 'Movie 17', imageUrl: 'https://via.placeholder.com/200' },
      { id: 18, title: 'Movie 18', imageUrl: 'https://via.placeholder.com/200' },
      { id: 19, title: 'Movie 19', imageUrl: 'https://via.placeholder.com/200' },
      { id: 20, title: 'Movie 20', imageUrl: 'https://via.placeholder.com/200' },
      { id: 21, title: 'Movie 21', imageUrl: 'https://via.placeholder.com/200' },
      { id: 22, title: 'Movie 22', imageUrl: 'https://via.placeholder.com/200' },
      { id: 23, title: 'Movie 23', imageUrl: 'https://via.placeholder.com/200' },
      { id: 24, title: 'Movie 24', imageUrl: 'https://via.placeholder.com/200' },
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