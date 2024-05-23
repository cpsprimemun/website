import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const Timer = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const now = dayjs();
    const end = dayjs(endDate);
    const diff = end.diff(now);

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const duration = dayjs.duration(diff);

    return {
      days: duration.days(),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds()
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="flex-container">
  <div className="box">
    <div className="text-2xl">{timeLeft.days}</div>
    <div className="text-sm">Days</div>
  </div>
  <div className="box">
    <div className="text-2xl">{timeLeft.hours}</div>
    <div className="text-sm">Hours</div>
  </div>
  <div className="box">
    <div className="text-2xl">{timeLeft.minutes}</div>
    <div className="text-sm">Minutes</div>
  </div>
  <div className="box">
    <div className="text-2xl">{timeLeft.seconds}</div>
    <div className="text-sm">Seconds</div>
  </div>
</div>


  );
};

export default Timer;
