import './Timer.css'
import CountdownTimer from './CountdownTimer';

export function Timer() {

    const ONE_MINUTE = 10 * 1000 + 2000; // 2000 adjusts for delay!
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterOneHour = NOW_IN_MS + ONE_MINUTE;

    return (
        <div id="timer">
            <p>Current session</p>
            <CountdownTimer targetDate={new Date(dateTimeAfterOneHour)} />

            
        </div>
    )
}

export default Timer;