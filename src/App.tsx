import { BrowserRouter, Route, Routes } from "react-router-dom"
import { INDEX, QUESTION_GAME_PARAMS } from "./routes"
import DifficultySelector from "./pages/difficulty-selector/DifficultySelector"
import InitGame from "./pages/init-game/InitGame"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = {INDEX} element = {<DifficultySelector />}/>
        <Route path = {QUESTION_GAME_PARAMS} element = {<InitGame />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
