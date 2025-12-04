import { BrowserRouter, Route, Routes } from "react-router-dom"
import { INDEX, QUESTION_GAME_PARAMS, END_GAME_PARAMS } from "./urls"
import DifficultySelector from "./pages/difficulty-selector/DifficultySelector"
import InitGame from "./pages/init-game/InitGame"
import EndGame from "./pages/end-game/EndGame"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = {INDEX} element = {<DifficultySelector />}/>
        <Route path = {QUESTION_GAME_PARAMS} element = {<InitGame />} />
        <Route path = {END_GAME_PARAMS} element = {<EndGame />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
