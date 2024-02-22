"use client";
import React, { useEffect, useState } from "react";

function Timer({ minutes }) {
  const [mins, setMinutes] = useState(minutes);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
        } else {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [mins, seconds]);

  return (
    <div className="flex justify-around p-2 mb-2">
      <div className="flex flex-col justify-center items-center gap-3">
        <span className="py-3 px-3 bg-[#88BDBC] text-[#112D32] text-3xl font-semibold rounded-md">
          {mins < 10 ? `0${mins}` : mins}
        </span>
        <span className="text-sm text-[#FBFAF8] font-bold">
          {mins == 1 ? "Minute" : "Minutes"}
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <span className="py-3 px-3 bg-[#88BDBC] text-[#112D32] text-3xl font-semibold rounded-md">
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
        <span className="text-sm text-[#FBFAF8] font-bold">
          {seconds == 1 ? "Second" : "Seconds"}
        </span>
      </div>
    </div>
  );
}

export default Timer;
