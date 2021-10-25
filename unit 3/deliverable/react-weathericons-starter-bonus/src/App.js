import weather from './weatherData';
import './styles.css';
import WeatherForecast from "./components/WeatherForecast"



function App() {
  console.log(weather)
  const foreCast = weather.map((ele,index)=>{
    return(
        <WeatherForecast
          {...ele}
          key={index}
        />
    )
  })
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      <section>
        {foreCast}
      </section>
    </div>
  );
}

export default App;
