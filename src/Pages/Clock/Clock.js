import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import "./Clock.css";

const Clock = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinuites, setTimeMinuites] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  //   console.log(timerDays);

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("February 8, 2022").getTime();
    // console.log(countDownDate);
    interval = setInterval(() => {
      const now = new Date().getTime();
      //   console.log(now);
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      console.log(days);
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
  //   console.log(timerDays);
  return (
    <Fragment className="clock-container">
      <section className="timer-container">
        <section className="timer">
          <div className="clock">
            <section>
              <p>{timerDays}</p>
              <small>Days</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <small>Hours</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerMinuites}</p>
              <small>Minuites</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

// Clock.defaultProps = {
//   timerDays: 10,
//   timerHours: 10,
//   timerMinuites: 10,
//   timerSeconds: 10,
// };

export default Clock;
