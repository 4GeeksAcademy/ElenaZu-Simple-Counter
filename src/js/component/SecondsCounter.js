import React, { useState, useEffect } from 'react'

const SecondsCounter = (props) => {

  const [unidad, setUnidad] = useState(0);
  useEffect(() => {
    setInterval(function () {
      
      setUnidad(prevUnidad => prevUnidad === 9 ? 0 : prevUnidad + 1);

    }, props.secondsFrequency * 1000);
    return () => {
    };
  }, []);

  return (
    <div className='number-container bg-dark text-center'>
      <h1>{unidad}</h1>
    </div>
  )
}

export default SecondsCounter