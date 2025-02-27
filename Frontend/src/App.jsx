import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import ProfilePage from "./pages/ProfilePage";
import TuitionList from "./pages/TuitionList";
import TuitionDetails from "./pages/TuitionDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/find-tutions" element={<TuitionList />} />
        <Route path="/find-tutions/:id" element={<TuitionDetails />} />

      </Routes>
    </Router>
  );
}

export default App;                                                                                        