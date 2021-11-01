import MovieDisplay from "./components/MovieDisplay";
import Form from  "./components/Form";
import {useState} from "react"

function App() {
  const apiKey = "9d304474";
  const [movie, setMovie] = useState(null);

  const getMovie = async(searchTerm)=>{
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);

  };
  return (
    <div className="App">
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
