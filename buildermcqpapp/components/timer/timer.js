"use client";
import React, { useCallback, useEffect, useState } from "react";

function Timer() {
  const [countDownTime, setCountDownTIme] = useState({
    hours: "00",
    minutes: "15",
    seconds: "00",
  });
  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;
    const hours =
      Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor(
            (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )
        : `0${Math.floor(
            (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDifference % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDifference % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDifference % (60 * 1000)) / 1000)}`;
    if (timeDifference < 0) {
      setCountDownTIme({
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTIme({
        hours,
        minutes,
        seconds,
      });
    }
  };
  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth() + 1,
      customDate.getDate() + 6,
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 1
    );
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, []);
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
    <div className="flex justify-between p-2 mb-2">
      <div className="flex flex-col justify-center items-center gap-3">
        <span className="py-3 px-3 bg-[#88BDBC] text-[#112D32] text-3xl font-semibold rounded-md">
          {countDownTime?.hours}
        </span>
        <span className="text-sm text-[#FBFAF8] font-bold">
          {countDownTime?.hours == 1 ? "Hour" : "Hours"}
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <span className="py-3 px-3 bg-[#88BDBC] text-[#112D32] text-3xl font-semibold rounded-md">
          {countDownTime?.minutes}
        </span>
        <span className="text-sm text-[#FBFAF8] font-bold">
          {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <span className="py-3 px-3 bg-[#88BDBC] text-[#112D32] text-3xl font-semibold rounded-md">
          {countDownTime?.seconds}
        </span>
        <span className="text-sm text-[#FBFAF8] font-bold">
          {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
        </span>
      </div>
    </div>
  );
}

export default Timer;
