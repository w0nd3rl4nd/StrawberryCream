import './App.css'
import {Button, ButtonProps} from './components/Button'


function App() {

  const buttonProps: ButtonProps = {
    text: "Hello Button!",
    size: 100,
  };

  return (
    <>
      <p>StrawberryCream</p>
      <Button properties={buttonProps}/>
    </>
  )
}

export default App
