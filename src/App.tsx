import './App.css'
import { TimerCard } from './components/TimerCard'
import { Timer } from './components/Timer'
import { ButtonStart } from './components/ButtonStart'
import { reducer, initialState } from "./hooks/useSettings"
import React from 'react'

export const UserContext = React.createContext({
  state: initialState,
  dispatch: () => null
})

function App() {

  const [state, dispatch] = React.useReducer(reducer, initialState)


  return (
    <>
      <div id="container">
        <TimerCard 
          backgroundcolor='rgba(246, 169, 189, 0.9)'
          backgroundside='rgba(255, 224, 248, 1)'
        />
        <Timer/>
        <ButtonStart prep={5} work={20} rest={10} reps={4} />
      </div>
    </>
  )
}

export default App
