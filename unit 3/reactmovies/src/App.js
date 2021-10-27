import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import {useState, useEffect} from "react"


function App() {
  const apiKey = "9d304474"

  const[movie, setMovie]= useState(null)

    // function to get movie
    const getMovie = async (searchTerm) => {
      // fetching data from the api
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
  
      //convert the response into JSON
      const data = await response.json()
      
      // set the movie state to the data from the api
      setMovie(data)
    }
    useEffect(() => {
      const movies = ["Casper", "Last Action Hero", "The Frighteners", "Clerks","lucy","Mon"]
      const randomIndex = Math.floor(Math.random() * movies.length)
      getMovie(movies[randomIndex])
    }, [])


  return (
    <div className="App">
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
