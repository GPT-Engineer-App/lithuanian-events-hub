import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Navigation from "./components/Navigation.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AIFacts from "./pages/AIFacts.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/ai-facts" element={<AIFacts />} />
      </Routes>
    </Router>
  );
}

export default App;
