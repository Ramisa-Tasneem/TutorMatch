import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register"; 
import ProfilePage from "./pages/ProfilePage";







function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage/>} />
               

      </Routes>
    </Router>
  );
}

export default App;
