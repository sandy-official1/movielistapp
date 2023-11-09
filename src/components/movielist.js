import React, { useEffect, useState } from "react";

const Movies = () => {
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const moviesPerPage = 5; // Adjust the number of movies per page as needed

  useEffect(() => {
    // API Call
    fetch("https://hoblist.com/api/movieList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Check if the data received has a 'result' property that is an array
        if (data.result && Array.isArray(data.result)) {
          setMovieData(data.result);
        } else {
          console.error("Invalid data format received from API:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, []);

  const [votedMovies, setVotedMovies] = useState({});

  const handleVote = (movieId, action) => {
    setVotedMovies((prevVotes) => {
      const newVotes = { ...prevVotes };
      if (action === "up") {
        newVotes[movieId] = (newVotes[movieId] || 0) + 1;
      } else if (action === "down") {
        newVotes[movieId] = Math.max((newVotes[movieId] || 0) - 1, 0);
      }
      return newVotes;
    });
  };

  // Pagination
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movieData.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Movies List</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {currentMovies.map((movie) => (
          <div key={movie.id} style={{ width: "300px", margin: "10px" }}>
            <img
              src={movie.poster}
              alt={movie.title}
              style={{ width: "100%", height: "auto" }}
            />
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Director: {movie.director}</p>
            <p>Starring: {movie.stars}</p>
            <p>Views: {movie.views}</p>
            <p>Votes: {movie.voting}</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={() => handleVote(movie.id, "up")}>Vote +</button>
              <button onClick={() => handleVote(movie.id, "down")}>
                Vote -
              </button>
            </div>
            <p>Voted by: {votedMovies[movie.id] || 0} people</p>
            <button style={{ backgroundColor: "blue", color: "white" }}>
              Watch Trailer
            </button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        {/* Pagination */}
        {Array.from(
          { length: Math.ceil(movieData.length / moviesPerPage) },
          (_, index) => (
            <button key={index + 1} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Movies;
