import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/signUp';
import Home from './pages/home'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
