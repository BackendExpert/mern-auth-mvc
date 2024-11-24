import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage /> }/>
        <Route path="/Login" element={<Login /> }/>
        <Route path="/SignUp" element={<SignUp /> }/>
      </Routes>
    </BrowserRouter>
  )
}