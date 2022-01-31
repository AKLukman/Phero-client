import React, { useEffect } from "react";
import { useState } from "react";
import Clock from "./Clock";

const ClockComponents = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinuites, setTimeMinuites] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  //   console.log(timerDays);

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("December 30 2021 ").getTime();
    console.log("hello");
    interval = setInterval(() => {
      const now = new Date().getTime();
      console.log(now);
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        //   stop Timer
        clearInterval(interval.current);
      } else {
        //   update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimeMinuites(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div>
      <Clock
        key={timerDays}
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinuites={timerMinuites}
        timerSeconds={timerSeconds}
      ></Clock>
    </div>
  );
};

export default ClockComponents;
