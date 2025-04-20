import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';

  interface ShowCounterProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  const ShowCounter: React.FC<ShowCounterProps> = ({ hours, minutes, seconds }) => {
    return (
      <div className="show-counter">
        <DateTimeDisplay value={hours} type={'Hours'}/><p>:</p><DateTimeDisplay value={minutes} type={'Mins'}/><p>:</p><DateTimeDisplay value={seconds} type={'Seconds'}/>
      </div>
    );
  };

interface CountdownTimerProps {
    targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    return (
      <ShowCounter
          days = {days}
          hours = {hours}
          minutes = {minutes}
          seconds = {seconds}
      />
  );
};

export default CountdownTimer;
