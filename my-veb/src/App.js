import "./App.css";
import { Team } from "./components/Team";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import GetAccess from "./components/pages/GetAccess";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Team />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/GetAccess" element={<GetAccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
