import { Link, Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import TestPage from "./pages/test";
import ErrorPage from "./pages/404";

const App = () => {
  return (
    <div className="app">
      <nav>
        <Link to="/home">
          Go Home
        </Link>
        /
        <Link to="/about">
          Go About
        </Link>
      </nav>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
