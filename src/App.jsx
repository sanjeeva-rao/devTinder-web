import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Components/Login.jsx"
import Profile from "./Components/Profile.jsx"
import Body from "./Components/Body.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
