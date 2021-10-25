import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

function WeatherForecast({img,conditions,time}) {

    return (
      <div className="weather">
       <WeatherIcon
        img={img}
        alt=""
        />
       <WeatherData
        conditions={conditions}
        time={time}
        />
      </div>
    );
  }
  
  export default WeatherForecast