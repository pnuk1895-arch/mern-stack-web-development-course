import Signup from "./pages/Signup.jsx"
import HomePage from "./pages/homePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import { BrowserRouter,Routes,Route } from "react-router-dom"

const App = () => {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/" element={<HomePage/>} />

    </Routes>

    </BrowserRouter>
      

  )
}

export default App



