import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardSection from "./CardSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
