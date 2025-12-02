import { BrowserRouter, Route, Routes } from "react-router-dom"
import { INDEX, QUESTION_GAME_PARAMS, WIN_GAME } from "./routes"
import DifficultySelector from "./pages/difficulty-selector/DifficultySelector"
import InitGame from "./pages/init-game/InitGame"
import WinGame from "./pages/win-game/WinGame"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = {INDEX} element = {<DifficultySelector />}/>
        <Route path = {QUESTION_GAME_PARAMS} element = {<InitGame />} />
        <Route path = {WIN_GAME} element = {<WinGame />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
