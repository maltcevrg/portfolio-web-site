import UI from "./components/UI/UI"
import "./App.css"
import { HashRouter} from "react-router-dom"

function App() {
  return (
    <div className="wrapper">
      <HashRouter>
        <UI/>
      </HashRouter>
    </div>
  )
}

export default App
