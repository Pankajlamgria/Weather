import React, { useContext } from "react";
import weathercontext from "../context/Weathercontext";

function Card(props) {
  const contextcontent=useContext(weathercontext);
  const getDay = (data) => {
    let date = new Date(data);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  };  
  const handleUpdateChart=()=>{
    contextcontent.setChartInfo({
      series: [
        {
          name: "Desktops",
          data:[props.data.hour[0].temp_c,props.data.hour[3].temp_c,props.data.hour[6].temp_c, props.data.hour[9].temp_c,props.data.hour[12].temp_c, props.data.hour[15].temp_c,props.data.hour[18].temp_c, props.data.hour[21].temp_c,props.data.hour[23].temp_c],
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
  const today = new Date();
  const todDate = today.toISOString().split("T")[0];
  return (
    <div onClick={handleUpdateChart} className="w-[12%] bg-neutral-800 rounded-2xl h-[100%] flex flex-col justify-around items-center cursor-pointer shadow-md hover:bg-neutral-700 transition-colors p-2">
        <p className="text-[#d6d6d6] text-[13px]">
          {props.data.date === todDate ? "Today" : getDay(props.data.date)}
        </p>
        <img src={props.data.day.condition.icon} alt="img"/>

        <p className="text-[#d6d6d6] text-sm font-normal" >{props.data.day.avgtemp_c}&deg; C</p>
    </div>
  );
}

export default Card;
