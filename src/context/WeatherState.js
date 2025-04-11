import React, { useState } from "react";
import weathercontext from "./Weathercontext";
const WeatherState = (props) => {
  const [api, setapi] = useState("35fa93c2767244fc9dd132255252401");
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast,setForecast]=useState({});
  const [flag, setflag] = useState(false);
  const [forecastFlag,setForecastFlag]=useState(false);
  const [dayName,setDayName]=useState();
  const [day1,setDay1]=useState();
  const [day2,setDay2]=useState();
  const [day3,setDay3]=useState();
  const [day4,setDay4]=useState();
  const [chartInfo, setChartInfo] = useState({
      series: [
        {
          name: "Desktops",
          data:[10, 41, 35, 51, 49, 62, 69, 41, 8],
        }
      ],
      options: {
        chart: {
          height: 250,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Temprature',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['transparent'], // alternating row colors
            opacity: 1
          }
        },
        xaxis: {
          categories: ['12AM', '3AM', '6AM', '9PM', '12PM', '3PM', '6PM', '9PM','11PM']
        }
      }
    });



  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  function getPreviousDate(daysAgo) {
    const today = new Date();
    const previousDate = new Date(today);

    previousDate.setDate(today.getDate() - daysAgo);
    
    const yyyy = previousDate.getFullYear();
    const mm = String(previousDate.getMonth() + 1).padStart(2, '0');
    const dd = String(previousDate.getDate()).padStart(2, '0');
    
    return `${yyyy}-${mm}-${dd}`;
  }
  const getPreviousWeather=async(location,date,day)=>{
    try{
      const response=await fetch(`http://api.weatherapi.com/v1/history.json?key=${api}&q=${location}&dt=${date}`,{
        headers:{}
      });
      const data=await response.json();
      if(day===1)setDay1(data.forecast.forecastday[0]);
      else if(day===2)setDay2(data.forecast.forecastday[0]);
      else if(day===3)setDay3(data.forecast.forecastday[0]);
      else setDay4(data.forecast.forecastday[0]);
    }
    catch(e){
      console.log(e);
      return -1;
    }
  }

  const getCurrentWeather = async (location) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${api}&q=${location}&aqi=yes`,
        {
          headers: {},
        }
      );
      const data = await response.json();
      
      console.log(data);
      if(data.error===undefined){
        setCurrentWeather(data);
        let date=new Date(data.location.localtime.split(' ')[0]);
        setDayName(days[date.getDay()]);
        setflag(true);
      }
      else{
        alert(data.error.message);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getForecast=async(location,day)=>{
    try{
      const response=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${api}&q=${location}&days=${day}&aqi=no&alerts=no`,{
        headers:{}
      });
      const data=await response.json();
      if(data.error===undefined){
        if(data !==undefined){
          getPreviousWeather(location,getPreviousDate(1),1);
          getPreviousWeather(location,getPreviousDate(2),2);
          getPreviousWeather(location,getPreviousDate(3),3);
          getPreviousWeather(location,getPreviousDate(4),4);
          // console.log(data);
          // settempChart(data.forecast.forecastday[0].hour);
          setForecast(data);
    
    
          setChartInfo({
            series: [
              {
                name: "Desktops",
                data:[data.forecast.forecastday[0].hour[0].temp_c,data.forecast.forecastday[0].hour[3].temp_c,data.forecast.forecastday[0].hour[6].temp_c, data.forecast.forecastday[0].hour[9].temp_c,data.forecast.forecastday[0].hour[12].temp_c, data.forecast.forecastday[0].hour[15].temp_c,data.forecast.forecastday[0].hour[18].temp_c, data.forecast.forecastday[0].hour[21].temp_c,data.forecast.forecastday[0].hour[23].temp_c],
              }
            ],
            options: {
              tooltip:{
                enabled:false,
              },
              markers:{
                hover:{
                  size:0
                }
              },
              
  
              chart: {
                height: 250,
                type: 'line',
                zoom: {
                  enabled: false
                },
                toolbar:{
                  show:false,
                },
              },
              dataLabels: {
                enabled: true
              },
              stroke: {
                curve: 'straight'
              },
              title: {
                text: 'Temprature',
                align: 'left'
              },
              grid: {
                row: {
                  colors: ['transparent'],
                  opacity: 1
                }
              },
              xaxis: {
                categories: ['12AM', '3AM', '6AM', '9PM', '12PM', '3PM', '6PM', '9PM','11PM']
              }
            }
          });
        }
      }

      setForecastFlag(true);
    }
    catch(e){
      console.log(e);
    }
  };

  return (
    <weathercontext.Provider
      value={{
        currentWeather,
        setCurrentWeather,
        getCurrentWeather,
        setapi,
        flag,
        setflag,
        getForecast,forecast,setForecast,
        dayName,setDayName,
        forecastFlag,setForecastFlag,
        day1,day2,day3,day4,
        chartInfo,setChartInfo,
      }}
    >
      {props.children}
    </weathercontext.Provider>
  );
};

export default WeatherState;
