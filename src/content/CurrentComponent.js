import React, { useContext, useEffect } from "react";
import weathercontext from "../context/Weathercontext";
import locationImg from "../media/locationIcon.png";
const CurrentComponent = () => {
  const contextcontent = useContext(weathercontext);
  useEffect(() => {
    contextcontent.getCurrentWeather("dehradun");
    contextcontent.getForecast("dehradun","10");
  },[]);

  return (
    <div className="bg-neutral-900 rounded-2xl h-[41%] w-[100%] p-6 px-10 flex">
      <div className="leftBlock w-[70%]">
        <div className="LocationDetails w-[65%] min-h-8 bg-[rgb(68,69,69)] rounded-2xl flex justify-around items-center">
          <img src={locationImg} alt="img" className="w-5 h-5" />
          <p className="text-[#d6d6d6] min-h-6 w-auto">
            {contextcontent.flag && contextcontent.currentWeather.location.name}{" "}
            ,{" "}
            {contextcontent.flag &&
              contextcontent.currentWeather.location.country}
          </p>
        </div>
        <div className="flex">
          <div className="w-[30%]">
            <p className="text-white text-2xl mt-2">
              {contextcontent.flag && contextcontent.dayName}
            </p>
            <p className="text-[#d6d6d6] text-sm">
              {contextcontent.flag &&
                contextcontent.currentWeather.location.localtime.split(" ")[0]}
            </p>
          </div>
          <div className="IconSec w-full h-40 flex justify-center items-center">
            {contextcontent.flag && (
              <img
                src={contextcontent.currentWeather.current.condition.icon}
                alt={contextcontent.currentWeather.current.condition.text}
                className="h-36 w-36"
              />
            )}
          </div>
        </div>
      </div>
      <div className="rightBlock w-[30%] flex flex-col items-end justify-between">
        <div className="LocationDetails w-10 h-8 bg-[rgb(68,69,69)] rounded-xl flex justify-center items-center">
          <p className="text-[#d6d6d6] h-6 w-36 text-center">&deg;C</p>
        </div>
        <div>
        <p className="text-white text-3xl mt-2">
              {contextcontent.flag && contextcontent.currentWeather.current.temp_c}&deg;C
            </p>
        </div>
        <div>
        <p className="text-white text-xl mt-2">
              {contextcontent.flag && contextcontent.currentWeather.current.condition.text}
            </p>
            <p className="text-[#d6d6d6] text-sm">
              Feels Like {contextcontent.flag && contextcontent.currentWeather.current.feelslike_c}&deg;
            </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentComponent;
