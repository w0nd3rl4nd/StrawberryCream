import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';

const ExpiredNotice = () => {
    return (
      <div className="expired-notice">
        <span>Expired!!!</span>
        <p>Please select a future date and time.</p>
      </div>
    );
  };

  interface ShowCounterProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  const ShowCounter: React.FC<ShowCounterProps> = ({ hours, minutes, seconds }) => {
    return (
      <div className="show-counter">
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} /><p>:</p><DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} /><p>:</p><DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </div>
    );
  };

interface CountdownTimerProps {
    targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />
    } else {
        return (
            <ShowCounter
                days = {days}
                hours = {hours}
                minutes = {minutes}
                seconds = {seconds}
            />
        );
    }
};

export default CountdownTimer;
