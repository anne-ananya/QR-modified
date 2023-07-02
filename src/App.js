//* Imports
import { Routes, Route } from "react-router-dom";
import CreateQR from "./components/CreateQR";
import Home from "./components/Home";
import ScanQR from "./components/ScanQR";
import About from "./components/About";


//* APP JSX
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<CreateQR />} />
        <Route path="/scan" element={<ScanQR />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </div>
  );
}

export default App;
