import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Navigation from "./components/Navigation.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AIDetails from "./pages/AIDetails.jsx";
import AIFacts from "./pages/AIFacts.jsx";
import WorldNews from "./pages/WorldNews.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />

        <Route path="/ai-facts" element={<AIFacts />} />
        <Route path="/ai-details" element={<AIDetails />} />
        <Route path="/world-news" element={<WorldNews />} />
      </Routes>
    </Router>
  );
}

export default App;
