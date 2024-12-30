import { useState } from "react"
import Button from "./components/Button"
import Card from "./components/Card"
import Timer from "./components/Timer"
import "./style.scss"



function App() {
  const [state , setState] = useState(true)

  const handleClock = () => {
    setState(!state)
  }

  return (
   <div>
    <Card>
      {state===true? <Timer />:null}
      <Button 
        className={state===true? "stop":"restart"}
        title={state===true?"STOP":"RESTART"} 
        onClick={handleClock} />
    </Card>
   </div>
  )

}

export default App
