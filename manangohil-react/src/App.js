import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Attendance from "./pages/Attendance";
import Profile from "./pages/Profile";
import Sem1 from "./pages/Results.jsx/Sem1";
import Sem2 from "./pages/Results.jsx/Sem2";
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages" element={<Home />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/results/sem1" element={<Sem1 />} />
          <Route path="/results/sem2" element={<Sem2 />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
