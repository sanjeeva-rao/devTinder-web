import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Components/Login.jsx"
import Profile from "./Components/Profile.jsx"
import Body from "./Components/Body.jsx"
import { Provider } from "react-redux"
import appStore from "./utils/appStore.js"
import Feed from "./Components/Feed.jsx"
import Connections from "./Components/Connections.jsx"
import Requests from "./Components/Requests.jsx"

function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body/>}>
              <Route path="/" element={<Feed/>} />
              <Route path="/login" element={<Login/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/connections" element={<Connections/>}/>
              <Route path="/requests" element={<Requests/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
