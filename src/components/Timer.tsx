import './Timer.css'
import CountdownTimer from './CountdownTimer';

export function Timer() {

    const ONE_MINUTE = 10 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterOneHour = NOW_IN_MS + ONE_MINUTE;

    return (
        <div id="timer">
            <CountdownTimer targetDate={new Date(dateTimeAfterOneHour)} />
        </div>
    )
}

export default Timer;