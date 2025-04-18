import './TimerCard.css'
import {Button} from './Button'

export interface TimerCardProps {
    backgroundcolor: string;
    backgroundside: string;
}

export function TimerCard(properties: TimerCardProps) {
    return (
        <>
            <div id='timercard' style={{backgroundColor: properties.backgroundcolor}}>
                <div id='notebookSide' style={{backgroundColor: properties.backgroundside}}>
                    <div id='1' className='notebookRing'/>
                    <div id='2' className='notebookRing'/>
                    <div id='3' className='notebookRing'/>
                    <div id='4' className='notebookRing'/>
                </div>
                
                {/* <div className='buttonRow' id='prevTime'>
                    <Button text="hello"/>
                    <Button text="hello"/>
                    <Button text="hello"/>
                    <Button text="hello"/>
                </div>

                <div className='buttonRow' id='workTime'>
                    <Button text="hello"/>
                    <Button text="hello"/>
                    <Button text="hello"/>
                    <Button text="hello"/>
                </div>

                <div className='buttonRow' id='restTime'>
                    <Button text="hello"/>
                    <Button text="hello"/>
                    <Button text="hello"/>
                    <Button text="hello"/>
                </div>

                <div className='buttonRow' id='repetitions'>
                    <Button text="hello"/>
                    <Button text="hello"/>
                    <Button text="hello"/>
                    <Button text="hello"/>
                </div> */}
            </div>
        </>
    )
}