import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Navbar";
import BlogPage from "./pages/BlogPage";
import BlogPostDetail from "./pages/BlogPostDetail";
import "./App.module.css";

function App() {
  return (
    <Router>
      <div className="app">
      
        <main className="main-content">
          <Routes>
            <Route path="/" element={<BlogPage />} />
            <Route path="/blog" element={<BlogPage />} /> {/* Handle /blog path */}
            <Route path="/blog/:id" element={<BlogPostDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
