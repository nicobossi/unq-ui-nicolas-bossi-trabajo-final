import { BrowserRouter, Route, Routes } from "react-router-dom"
import { INDEX, QUESTION_GAME_PARAMS } from "./routes"
import DifficultySelector from "./pages/difficulty-selector/DifficultySelector"
import QuestionGame from "./pages/question-game/QuestionGame"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = {INDEX} element = {<DifficultySelector />}/>
        <Route path = {QUESTION_GAME_PARAMS} element = {<QuestionGame />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
