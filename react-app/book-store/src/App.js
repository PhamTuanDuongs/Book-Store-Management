import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import ListBook from './components/ListBook';
<<<<<<< HEAD
import ListBookByUser from './components/ListBookByUser';
=======
import Login from './components/Login'
>>>>>>> duong

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ListBook />}></Route>
        <Route path="/" element={<ListBook />}></Route>
        <Route path="/listBook" element={<ListBook />}></Route>
<<<<<<< HEAD
        <Route path="/listBookByUser" element={<ListBookByUser />}></Route>
=======
        <Route path="/login" element={<Login />}></Route>
>>>>>>> duong

      </Routes>
    </BrowserRouter>
  );
}

export default App;
