import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomeSections/HomePage";
import CV from "./Pages/CV";
import Technos from "./Pages/Technos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/CV" element={<CV />}></Route>
        <Route path="/technologies" element={<Technos />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
