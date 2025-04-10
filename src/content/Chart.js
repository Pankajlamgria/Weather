import React, { useContext } from 'react';
import ReactApexChart from 'react-apexcharts';
import weathercontext from '../context/Weathercontext';

function Chart() {
  const contextcontent=useContext(weathercontext);


  return (
    <div className="bg-neutral-900 rounded-2xl h-[57%] w-[100%] p-4 text-white">
      <ReactApexChart 
        options={contextcontent.chartInfo.options} 
        series={contextcontent.chartInfo.series} 
        type="line" 
        height={300}
      />
    </div>
  );
}

export default Chart;
