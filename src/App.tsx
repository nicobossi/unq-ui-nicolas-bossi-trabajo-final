import { BrowserRouter, Route, Routes } from "react-router-dom"
import { INDEX, LOSE_GAME, QUESTION_GAME_PARAMS, WIN_GAME } from "./urls"
import DifficultySelector from "./pages/difficulty-selector/DifficultySelector"
import InitGame from "./pages/init-game/InitGame"
import WinGame from "./pages/win-game/WinGame"
import LoseGame from "./pages/lose-game/LoseGame"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = {INDEX} element = {<DifficultySelector />}/>
        <Route path = {QUESTION_GAME_PARAMS} element = {<InitGame />} />
        <Route path = {WIN_GAME} element = {<WinGame />} />
        <Route path = {LOSE_GAME} element = {<LoseGame />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
