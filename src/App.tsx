import { BrowserRouter, Route, Routes } from "react-router-dom"
import INDEX from "./routes"
import DifficultySelector from "./pages/difficulty-delector/DifficultySelector"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={INDEX} element = {<DifficultySelector />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
