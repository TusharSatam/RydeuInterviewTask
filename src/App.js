import './App.css';
import Navbar from './components/Navbar/Navbar';
import {  Route, Routes } from "react-router-dom";
import HelpSupport from './Pages/HelpSupport/HelpSupport';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
       <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<HelpSupport/>} />
      </Routes>
    </div>
  );
}

export default App;
