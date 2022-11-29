import "./App.css";
import { Team } from "./components/Team";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import GetAccess from "./components/pages/GetAccess";
import { createContext, useState } from "react";

export const ThemeContext = createContext({});

function App() {
  const [bg, setBg] = useState(false);
  function setFix() {
    if (window.scrollY <= 0) {
      setBg(false);
    }
    else {
      setBg(true);
    }
  }

  const [theme, setTheme] = useState({
    pallate: {
      dark: false,
    },
  });

  const changeDarkTheme = () => {
    setTheme({ ...theme, pallate: {dark: !theme.pallate.dark} });
  }

  return (
    <ThemeContext.Provider value={{
      theme, changeDarkTheme
    }}>
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
    </ThemeContext.Provider>
  );
}

export default App;
