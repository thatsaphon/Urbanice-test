import "./App.css"
import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "./components/FooterComponent"
import { Route, Routes, Navigate } from "react-router-dom"
import A2 from "./pages/A2"
import HomePage from "./pages/HomePage"
import A3 from "./pages/A3"
import A3Answer from "./pages/A3Answer"

function App() {
  return (
    <div className="bg-zinc-50 min-h-screen flex flex-col">
      <HeaderComponent></HeaderComponent>
      <div className="flex flex-col min-h-max flex-1 justify-between">
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
        <Routes>
          <Route exact path="home" element={<HomePage></HomePage>} />
          <Route exact path="A2" element={<A2></A2>} />
          <Route exact path="A3" element={<A3></A3>} />
          <Route exact path="A3/answer" element={<A3Answer></A3Answer>} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <FooterComponent className="align-bottom"></FooterComponent>
      </div>
    </div>
  )
}

export default App
