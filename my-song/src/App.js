import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Home } from "./components/Home";
import Search from "./components/pages/Search";
import YourLibrary from "./components/pages/YourLibrary";
import CreatePlaylist from "./components/pages/CreatePlaylist";
import LikedSongs from "./components/pages/LikedSongs";
import MyPlaylist1 from "./components/pages/MyPlaylist1";
import MyPlaylist2 from "./components/pages/MyPlaylist2";
import MyPlaylist3 from "./components/pages/MyPlaylist3";
import MyPlaylist4 from "./components/pages/MyPlaylist4";
import MyPlaylist5 from "./components/pages/MyPlaylist5";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/YourLibrary" element={<YourLibrary />} />
          <Route path="/CreatePlaylist" element={<CreatePlaylist />} />
          <Route path="/LikedSongs" element={<LikedSongs />} />
          <Route path="/MyPlaylist1" element={<MyPlaylist1 />} />
          <Route path="/MyPlaylist2" element={<MyPlaylist2 />} />
          <Route path="/MyPlaylist3" element={<MyPlaylist3 />} />
          <Route path="/MyPlaylist4" element={<MyPlaylist4 />} />
          <Route path="/MyPlaylist5" element={<MyPlaylist5 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
