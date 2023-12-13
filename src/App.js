import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import NoPage from "./pages/NoPage";
import Getready from "./pages/Getready";
import LoggedSuccess from "./pages/LoggedSuccess";
import UploadAvatar from "./pages/UploadAvatar";
import Info from "./pages/Info";
import Intro from "./pages/Intro";
import AddSongs from "./pages/AddSongs";
import StartMatching from "./pages/StartMatching";
import Home from "./pages/Home";
import queen from "./assets/queen.png";
import toploader from "./assets/toploader.png";
import damso from "./assets/damso.png";
import orelsan from "./assets/orelsan.png";
import gaelfaye from "./assets/gaelfaye.png";
import { useState } from "react";

function App() {
  const [openSearch, setOpenSearch] = useState(false);
  const albums = [
    { title: "Crazy little thing called love", artists: "Queen", img: queen },
    { title: "Dancing in the moonlight", artists: "Toploader", img: toploader },
    { title: "Feu de bois", artists: "Damso", img: damso },
    { title: "Shonen", artists: "Orelsan", img: orelsan },
    { title: "Boomer", artists: "Orelsan", img: gaelfaye },
  ];

  const handleCloseSearch = () => {
    setOpenSearch(!openSearch);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route
          path="/home"
          element={
            <Home
              albums={albums}
              openSearch={openSearch}
              handleCloseSearch={handleCloseSearch}
            />
          }
        />
        <Route path="/splash" element={<SplashScreen />} />
        <Route
          path="/add-songs"
          element={
            <AddSongs
              albums={albums}
              openSearch={openSearch}
              handleCloseSearch={handleCloseSearch}
            />
          }
        />
        <Route path="/start-matching" element={<StartMatching />} />
        <Route path="/get-ready" element={<Getready />} />
        <Route path="/logged-success" element={<LoggedSuccess />} />
        <Route path="/upload-avatar" element={<UploadAvatar />} />
        <Route path="/info" element={<Info />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
