import React, { useContext } from "react";
import windImg from "../media/wind.png";
import weathercontext from "../context/Weathercontext";
import humidity from "../media/humidity.png";
import visibility from "../media/visibility.png";
import uv from "../media/uv.png";
import sunrise from "../media/sunrise.png";
import sunset from "../media/suset.png"

function Details() {
  const contextcontent = useContext(weathercontext);
  return (
    <div className="bg-neutral-900 rounded-2xl h-[55%] w-[100%] p-4">
      <p className="text-white text-xl mb-8 ml-5">Today's Highlight</p>
      <div className="flex flex-col justify-around h-[80%]">

        <div className="FirstSec flex justify-around">

          <div className="box p-3 bg-neutral-800 rounded-2xl w-32 h-24 shadow-md">
            <div className="flex justify-around items-center">
              <img src={windImg} alt="img" className="w-5 h-5 color-white" />
              <p className="text-[#d6d6d6] text-sm">Wind Status</p>
            </div>
            <div className="text-white flex flex-col items-end mt-2 h-12 justify-around">
              <p className="text-xl">
                {contextcontent.flag &&
                  parseFloat(
                    contextcontent.currentWeather.current.wind_kph
                  )}{" "}
                <span className="text-[11px]">km/h</span>
              </p>
              <p className="text-[12px]">
                {contextcontent.flag &&
                  contextcontent.currentWeather.current.last_updated.split(
                    " "
                  )[1]}{" "}
                {contextcontent.flag &&
                contextcontent.currentWeather.current.is_day === "1"
                  ? "AM"
                  : "PM"}
              </p>
            </div>
          </div>

          <div className="box p-3 bg-neutral-800 rounded-2xl w-32 h-24 shadow-md">
            <div className="flex justify-around items-center">
              <img src={humidity} alt="img" className="w-5 h-5 color-white" />
              <p className="text-[#d6d6d6] text-sm">Humidity</p>
            </div>
            <div className="text-white flex flex-col items-end mt-2 h-12 justify-around">
              <p className="text-xl">
                {contextcontent.flag &&
                  parseFloat(
                    contextcontent.currentWeather.current.humidity
                  )}{" "}
                <span className="text-[11px]">%</span>
              </p>
              <p className="text-[12px]">Humidity is good</p>
            </div>
          </div>
          <div className="box p-3 bg-neutral-800 rounded-2xl w-48 h-24 shadow-md flex justify-around">
            <div className="flex justify-around items-center">
              <img src={sunrise} alt="img" className="w-16 h-16 color-white" />
            </div>
            <div className="text-white flex flex-col items-end mt-2 h-12 justify-around">
              <p className="text-sm">Sunrise</p>
              <p className="text-1xl">{contextcontent.forecastFlag &&  contextcontent.forecast.forecast.forecastday[0].astro.sunrise}</p>
            </div>
          </div>
        </div>
        <div className="SecondSec flex justify-around">
          <div className="box p-3 bg-neutral-800 rounded-2xl shadow-md w-32 h-24">
            <div className="flex justify-around items-center">
              <img src={uv} alt="img" className="w-5 h-5 color-white" />
              <p className="text-[#d6d6d6] text-sm">UV Index</p>
            </div>
            <div className="text-white flex flex-col items-end mt-2 h-12 justify-around">
              <p className="text-xl">
                {contextcontent.flag &&
                  parseFloat(
                    contextcontent.currentWeather.current.uv
                  )}{" "}
                <span className="text-[11px]">UV</span>
              </p>
              <p className="text-[12px]">
                Moderate UV
              </p>
            </div>
          </div>

          <div className="box p-3 bg-neutral-800 shadow-md rounded-2xl w-32 h-24">
            <div className="flex justify-around items-center">
              <img src={visibility} alt="img" className="w-5 h-5 color-white" />
              <p className="text-[#d6d6d6] text-sm">Visibility</p>
            </div>
            <div className="text-white flex flex-col items-end mt-2 h-12 justify-around">
              <p className="text-xl">
                {contextcontent.flag &&
                  parseFloat(
                    contextcontent.currentWeather.current.vis_km
                  )}{" "}
                <span className="text-[11px]">km</span>
              </p>
              <p className="text-[12px]">
                {contextcontent.flag &&
                  contextcontent.currentWeather.current.last_updated.split(
                    " "
                  )[1]}{" "}
                {contextcontent.flag &&
                contextcontent.currentWeather.current.is_day === "1"
                  ? "AM"
                  : "PM"}
              </p>
            </div>
          </div>
          <div className="box p-3 bg-neutral-800 rounded-2xl w-48 h-24 shadow-md flex justify-around">
            <div className="flex justify-around items-center">
              <img src={sunset} alt="img" className="w-16 h-16 color-white" />
            </div>
            <div className="text-white flex flex-col items-end mt-2 h-12 justify-around">
              <p className="text-sm">Sunset</p>
              <p className="text-1xl">{contextcontent.forecastFlag &&  contextcontent.forecast.forecast.forecastday[0].astro.sunset}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
