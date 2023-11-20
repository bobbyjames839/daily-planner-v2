import '../css/Time.css'
import React, { useState, useEffect } from "react";

export const Time = () => {

  const [time, setTime] = useState('');

  useEffect(() => {

    const updateDigitalClock = () => {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();
      setTime(`${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`);
    }

    const formatNumber = (number) => {
      return number < 10 ? `0${number}` : number;
    }

    updateDigitalClock();
    const intervalId = setInterval(updateDigitalClock, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className='time'>{time}</div>
  )
}