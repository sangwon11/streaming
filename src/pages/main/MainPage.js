import React from "react";
import Nav from "../nav/Nav";
import MoviePage from "../../movie/MoviePage";
import './MainPage.css';

function MainPage() {
    return (
      <div className="background">
        <Nav/>
        <div className="main-page-content">
          <h1>Welcome to Streaming-site</h1>
          <p>You can watch unlimited historical movies and drama series.</p>
          
        </div>
        <MoviePage/>
      </div>
    );
};

export default MainPage;