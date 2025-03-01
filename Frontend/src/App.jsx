import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import ProfilePage from "./pages/ProfilePage";
import TuitionList from "./pages/TuitionList";
import TuitionDetails from "./pages/TuitionDetails";
import TutorRequest from "./pages/tutorReq"; 
import AboutUs from "./pages/aboutUs";


import ApplyNow from "./pages/applynow";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tutor-request" element={<TutorRequest />} />
        <Route path="/find-tutions" element={<TuitionList />} />
        <Route path="/tuition/:id" element={<TuitionDetails />} />
        <Route path="/profile" element={<ProfilePage />} /> 

        <Route path="/applynow" element={<ApplyNow/>} /> 

        <Route path="/about-us" element={<AboutUs />} />
  



      </Routes>
    </Router>
  );
}

export default App;       

