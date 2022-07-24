import UI from "./components/UI/UI"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <UI/>
      </BrowserRouter>
    </div>
  )
}

export default App
