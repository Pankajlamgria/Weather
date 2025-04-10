import React, { useContext } from 'react'
import weathercontext from '../context/Weathercontext'
import Card from './Card';

function Forecast() {
  const contextcontent=useContext(weathercontext);
  

  return (
    <div className="bg-neutral-900 rounded-2xl h-[39%] w-[100%] p-2 px-8">
      <p className='text-white text-xl mb-3'>Past and Future</p>
      <div className='flex justify-around items-center h-[80%] pb-1'>
        {contextcontent.day4!==undefined && <Card data={contextcontent.day4}></Card>}
        {contextcontent.day3!==undefined && <Card data={contextcontent.day3}></Card>}
        {contextcontent.day2!==undefined && <Card data={contextcontent.day2}></Card>}
        {contextcontent.day1!==undefined && <Card data={contextcontent.day1}></Card>}
        {contextcontent.forecastFlag && contextcontent.forecast.forecast.forecastday.map((data) => {
            return <Card key={data.date} data={data}></Card>;
          })}
      </div>
    </div>
  )
}

export default Forecast
