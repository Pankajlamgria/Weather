import { useContext, useState } from "react";
import "./App.css";
import Chart from "./content/Chart";
import CurrentComponent from "./content/CurrentComponent";
import Details from "./content/Details";
import Forecast from "./content/Forecast";
import WeatherState from "./context/WeatherState";
import weathercontext from "./context/Weathercontext";

function App() {
  const [location,setLocation]=useState();
  const contextcontent=useContext(weathercontext);
  const handleSearchLocation=(e)=>{
    setLocation(e.target.value);
  }
  const handleSearch=(e)=>{
    if(e.key=="Enter"){
      contextcontent.getCurrentWeather(location);
      contextcontent.getForecast(location,3);
    }
  }

  return (
    // <WeatherState>
      <div className="">
        {/* HEADING SECTION  */}
        <div className="heading flex justify-between p-4 align-middle">
          {/* Greet */}
          <div className="">
            <h4 className="text-[#b4b6b7]">Hi, Pankaj</h4>
            <h2 className="text-white text-2xl font-medium">Good Morning</h2>
          </div>

          <div>

            {/* SEARCH SEC */}
            <div>
              <input className="bg-[rgb(68,69,69)] text-[rgb(180,182,183)] font-sans h-10 w-72 rounded-full px-5 pl-8 py-2 tracking-wider focus:outline-none focus:ring-0 focus:border-none" placeholder="Search your location" value={location} onChange={handleSearchLocation} onKeyDown={handleSearch}/>
            </div>

            {/* THEME BUTTON */}
            <div>

            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="h-[82vh] w-[43%] flex flex-col justify-between">
            <CurrentComponent/>
            <Details/>
          </div>

          <div className="h-[82vh] w-[55%] flex flex-col justify-between">
            <Chart/>
            <Forecast/>
          </div>
        </div>
      </div>
    // </WeatherState>
  );
}

export default App;
