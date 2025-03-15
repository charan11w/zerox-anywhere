import React, { useState } from "react";
import axios from "axios";
function MoviesList() {




  const styles = {
    total_cont: {
      padding: '20px'
    },
    image: {
      height: '330px',
      width: '220px'
    }
  }
  const [movies, setMovies] = useState([]);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [showTimes, setShowTimes] = useState({});
  const [hide, setHide] = useState({});
  const [showForm, setShowForm] = useState();
  const [isImage, setIsImage] = useState(null)
  const [movieDetails,setMovieDetails] =useState({
    show:false
  })


  // fetch with promise constructor

  // const fetchMoviesPromise = async () => {
  //   setLoading2(true)
  //   try {
  //     const response = await new Promise((resolve) => {
  //       setTimeout(() => resolve([
  //         { id: "one", title: "Scar", type: 'Horror / Action /Comedy', image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00434366-aspcpejkst-portrait.jpg' },
  //         { id: "two", title: "Mufasa", type: 'Action / Love /Story', image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00434366-aspcpejkst-portrait.jpg' },
  //         { id: "three", title: "Scar", type: 'Horror / Action /Comedy', image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00399670-abcxubsxlm-portrait.jpg' },
  //         { id: "four", title: "Mufasa", type: 'Action / Love /Story', image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00399670-abcxubsxlm-portrait.jpg' },
  //       ]), 1000);
  //     })

  //     setMovies(response)
  //   } catch (error) {
  //     console.error("Promise error", error)
  //   } finally {
  //     setLoading3(false);
  //   }
  // }


  const fetchMoviesAxios = async () => {
    setLoading2(true)
    try {
      const response = await axios.get('https://224d7812-d914-48aa-b3d4-d127da9b7f0a.mock.pstmn.io',
        {
          "Authorization": `Bearer ${localStorage.getItem('access_token')}`
        }
      )
      console.log('api response', response.data)
      const data = response.data
      setMovies(data)
    } catch (error) {
      console.error('axios error', error.message)
    } finally {
      setLoading2(false)
      setLoading3(false)
    }
  }
  const resetAll = () => {
    setMovies('')
    setLoading3(true)
    setLoading2(false)

  }

  const showTimings = (movieId) => {
    setHide(!hide[movieId])
    setLoading2(true)
    const moviesShowTimings = [
      "11:00 AM",
      "2:30 PM",
      "9:00 PM",
    ]

    setShowTimes(pre => ({
      ...pre,
      [movieId]: moviesShowTimings
    }));

    setHide(pre => ({
      ...pre,
      [movieId]: hide[movieId] ? false : true
    }))
    console.log(showTimes)
    setLoading2(false)
  }


  const deleteMovie = (movieId) => {
    setMovies(preMovies => preMovies.filter(movie => movie.id !== movieId))
  }

  const addMovie = () => {
    setShowForm(true)
  }

  const handleImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsImage(URL.createObjectURL(file));
    }
  }

  const storeTitle = (event) => {
    setMovieDetails(pre => ({
      ...pre,
      name:event.target.value
    }))
  }
  const storeType = (event) => {
    setMovieDetails(pre => ({
      ...pre,
      title:event.target.value
    }))
  }

  console.log(`${isImage}`)
  const displaySelected = () => {
    const newid=movies.length > 0 ? Math.max(...movies.map(m => m.id)) + 1:1;
    const newMovie={id:newid,title:movieDetails.name,type:movieDetails.title,image:`${isImage}`}
    setMovies(pre => ([
      ...movies,
      newMovie
    ]))
  }
  
  const closeForm=() => {
    setShowForm(false);

  }
  return (
    <div className="metal">
      {isImage}
      <div className="container text-center">
        <h1>Movie List</h1>
        {/* <button onClick={fetchMoviesPromise} disabled={loading1} className="btn btn-primary">
          {loading1 ? "Loading..." : "Fetch Movies (Promise)"}
        </button> */}
        <button onClick={fetchMoviesAxios} disabled={loading2} className="btn btn-primary">
          {loading2 ? "Loading..." : "Fetch Movies (Axios)"}
        </button>
        <button onClick={resetAll} disabled={loading3} className="btn btn-primary">
          Clear
        </button>
        <button onClick={addMovie} className="btn btn-primary">
          Add movies
        </button>
      </div>
      {showForm && <div className="mother-form">
        <div className="cinema-form">
          <div className="adms">Add Movies here</div>
          <div className="close-s" onClick={closeForm}>&#10005;</div>
          <label
            for='movieName'
            id="mn">
            Enter movie name
          </label>
          <input id="movieName"
            type="text"
            placeholder="enter name"
            onChange={storeTitle}
          />
          <label
            for='movieTitle'
            id="mtle">
            Enter movie type
          </label>
          <input id="movieTitle"
            type="text"
            placeholder="enter name"
            onChange={storeType}
          />
          <label for='movieImage'
            id="mige">
            select image
          </label>
          <input id="movieImage"
            type="file"
            accept="image/*"
            placeholder="enter name"
            onChange={handleImage}
          />
          <div className="cinema-add-btn">
            <button onClick={displaySelected}>Add Movie</button>
          </div>
        </div>
      </div>}
      {movies.length > 0 && (
        <div className="container may" style={styles.total_cont}>
          <div className="row ">
            {movies.map((movie, index) => {
              return (
                <div className="col-3 movie-cont" key={index}>
                  <div className="second-cont">
                    <div className="img-cont">
                      <img src={movie.image} className="cinema" />
                    </div>
                    <div className="movie-title">{movie.title}</div>
                    <div className="action-title">{movie.type}</div>
                    <div className="action-title">{showTimes[movie.id] && hide[movie.id] &&

                      <ul>
                        {
                          showTimes[movie.id].map((time, index) => (
                            <li key={index}>{time}</li>
                          ))
                        }
                      </ul>
                    }</div>
                    <div className="buttons-cont">
                      <button
                        className="showTimings"
                        onClick={() => showTimings(movie.id)}
                        disabled={loading2}
                      >
                        {hide[movie.id] ? 'Hide Timings' : 'Show TImings'}
                      </button>
                      <button
                        className="delete-mv"
                        onClick={() => deleteMovie(movie.id)}
                      >Delete</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) }
      {movies.length === 0 && 
      (
        <div className="container may">
          <div className="no-m">No Movies Yet</div>
          </div>
      )
      }
    </div>
  )
}


export default MoviesList;


