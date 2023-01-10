import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./components/contexts/DataProvider";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import { Menu } from "./components/Menu";
import { Home } from "./components/Home";
import { Open } from "./components/Open";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Lists from "./components/pages/Lists";
import Search from "./components/pages/Search";
import SearchOpen from "./components/pages/SearchOpen";
import YourLibrary from "./components/pages/YourLibrary";
import CreatePlaylist from "./components/CreatePlaylist";
import LikedSongs from "./components/pages/LikedSongs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <DataProvider>
          <Menu />
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/open" element={<Open />} />
            <Route path="/Srchopen" element={<SearchOpen />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/YourLibrary" element={<YourLibrary />} />
            <Route path="/CreatePlaylist" element={<CreatePlaylist />} />
            <Route path="/playlist/:id" element={<Lists />} />
            <Route path="/LikedSongs" element={<LikedSongs />} />
          </Routes>
        </DataProvider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
