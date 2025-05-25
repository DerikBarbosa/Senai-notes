import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login.jsx";
import CreateAccount from './pages/CreateAccount.jsx';

function App() {
  const isAuthenticated = () => {
    let token = localStorage.getItem('meuToken');
    return token !== null;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;