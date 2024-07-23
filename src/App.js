import './App.css';
import Navbar from './components/Navbar/Navbar';
import {  Route, Routes } from "react-router-dom";
import HelpSupport from './Pages/HelpSupport/HelpSupport';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HelpSupport/>} />
      </Routes>
    </div>
  );
}

export default App;
