import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/index.jsx";
import Notes from "./pages/Notes/index.jsx"
import CreateAccount from "./pages/CreateAccount/index.jsx";
import Notes from "./pages/Notes/index.jsx";


function App() {

  const isAuthenticated = () => {

    let token = localStorage.getItem("meuToken");

    if (token == null) {

      return false;

    } else {

      return true;

    }

  }

  return (
    <>
      <BrowserRouter>
      
        <Routes>

          <Route path="/" element={<Login/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/create" element={isAuthenticated() == true? <CreateAccount/> : <Login/>}></Route>
          <Route path="/notes" element={<Notes/>}></Route>
          <Route path="*" element={<h1>Not Found</h1>}></Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;