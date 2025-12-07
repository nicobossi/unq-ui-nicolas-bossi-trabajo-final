import { BrowserRouter, Route, Routes } from "react-router-dom"
import { INDEX, QUESTION_GAME_PARAMS, END_GAME_PARAMS } from "./urls"
import EndGame from "./pages/end-game/EndGame"
import StartGame from "./pages/start-game/StartGame"
import InitGame from "./pages/init-game/InitGame"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = {INDEX} element = {<InitGame />}/>
        <Route path = {QUESTION_GAME_PARAMS} element = {<StartGame />} />
        <Route path = {END_GAME_PARAMS} element = {<EndGame />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
