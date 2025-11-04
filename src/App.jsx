import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import PageLayout from "./Components/PageLayout/pagelayout";
import AnimeDetail from "./Pages/AnimeDetail/animedetail";
import About from "./Pages/Aboutus/about";
import Favorites from "./Pages/Favorites/FavoritesPage";
import Anime from "./Pages/Anime/anime";
import Manga from "./Pages/Manga/manga"


export default function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>}/>
        <Route path="anime/:key" element={<AnimeDetail />} />
        <Route path="manga/:key" element={<AnimeDetail />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} /> 
      </Route>
    </Routes>
  );
}