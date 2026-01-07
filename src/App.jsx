import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomeSections/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
