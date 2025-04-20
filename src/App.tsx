import './App.css'
import { TimerCard } from './components/TimerCard'
import { Timer } from './components/Timer'

function App() {

  return (
    <>
      <div id="container">
        <TimerCard 
          backgroundcolor='rgba(246, 169, 189, 0.9)'
          backgroundside='rgba(255, 224, 248, 1)'
        />
        <Timer/>
      </div>
    </>
  )
}

export default App
