import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import Register from "./pages/register";
import Login from "./pages/login";
import ProfilePage from "./pages/ProfilePage"; 
import TutorRequest from "./pages/tutorReq"; 










function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tutor-request" element={<TutorRequest />} />
        <Route path="/profile" element={<ProfilePage />} /> 
        

      </Routes>
    </Router>
  );
}

export default App;       

