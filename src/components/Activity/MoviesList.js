import React, { useState } from "react";
function MoviesList() {

  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState();


  // fetch with promise constructor

  const fetchMoviesPromise = async () => {
    setLoading(true)
    try {
      const response = await new Promise((resolve) => {
        setTimeout(() => resolve([
          { id: "one", title: "Scar" },
          { id: "two", title: "Mufasa" }
        ]), 1000);
      })

      setMovies(response)
    } catch (error) {
      console.error("Promise error", error)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div>
      <h1>Movie List</h1>
      <button onClick={fetchMoviesPromise} disabled={loading}>
        {loading ? "Loading..." : "Fetch Movies (Promise)"}
      </button>
      {/* <button onClick={fetchMoviesAxios} disabled={loading}>
        {loading ? "Loading..." : "Fetch Movies (Axios)"}
      </button> */}
      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}


export default MoviesList;