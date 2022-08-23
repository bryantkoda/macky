import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";

import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<QuizPage />} path="/quiz" />
          <Route element={<ResultPage />} path="/results" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
