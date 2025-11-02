import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import PageLayout from "./Components/PageLayout/pagelayout";


export default function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/anime/:slugOrId" element={<AnimeDetail />} />
        <Route path="/manga/:slugOrId" element={<MangaDetail />} /> */}
        {/* <Route path="/anime" element={<Anime />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} /> */}
      </Route>
    </Routes>
  );
}