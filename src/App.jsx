import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomeSections/HomePage";
import CV from "./Pages/CV";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/CV" element={<CV />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
