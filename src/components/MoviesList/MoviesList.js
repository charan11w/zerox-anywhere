import React, { useState } from "react";
import axios from "axios";
function MoviesList() {




  const styles={
    total_cont:{
      padding:'20px'
    },
    image:{
      height:'330px',
      width:'220px'
    }
  }
  const [movies, setMovies] = useState("");
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(true)


  // fetch with promise constructor

  const fetchMoviesPromise = async () => {
    setLoading1(true)
    try {
      const response = await new Promise((resolve) => {
        setTimeout(() => resolve([
          { id: "one", title: "Scar", type: 'Horror / Action /Comedy', image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00434366-aspcpejkst-portrait.jpg' },
          { id: "two", title: "Mufasa", type: 'Action / Love /Story', image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00434366-aspcpejkst-portrait.jpg' },
          { id: "three", title: "Scar", type: 'Horror / Action /Comedy', image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00399670-abcxubsxlm-portrait.jpg' },
          { id: "four", title: "Mufasa", type: 'Action / Love /Story', image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00399670-abcxubsxlm-portrait.jpg' },
        ]), 1000);
      })

      setMovies(response)
    } catch (error) {
      console.error("Promise error", error)
    } finally {
      setLoading1(false)
      setLoading3(false);
    }
  }


  const fetchMoviesAxios = async () => {
    setLoading2(true)
    try {
      const response = await axios.get('https://224d7812-d914-48aa-b3d4-d127da9b7f0a.mock.pstmn.io',
        {
          "Authorization":`Bearer ${localStorage.getItem('access_token')}`
        }
      )
      console.log('api response', response.data)
      const data=response.data
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
    setLoading1(false)
    setLoading2(false)

  }

  return (
    <div>
      <div className="container text-center">
        <h1>Movie List</h1>
        <button onClick={fetchMoviesPromise} disabled={loading1} className="btn btn-primary">
          {loading1 ? "Loading..." : "Fetch Movies (Promise)"}
        </button>
        <button onClick={resetAll} disabled={loading3} className="btn btn-primary">
          Reset
        </button>
        <button onClick={fetchMoviesAxios} disabled={loading2} className="btn btn-primary">
        {loading2 ? "Loading..." : "Fetch Movies (Axios)"}
      </button>
      </div>
      
      {movies.length > 0 && (
        <div className="container " style={styles.total_cont}>
          <div className="row ">
            {movies.map(movie => {
              return (
                <div className="card col-3" key={movie.id}>
                  <img className="card-img-top" src={movie.image} alt="Card image cap" style={styles.image}/>
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.type}</p>
                    <a href="#" class="btn btn-primary">Book</a>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      )}
    </div>
  )
}


export default MoviesList;


