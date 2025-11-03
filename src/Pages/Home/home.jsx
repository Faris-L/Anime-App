import HeroSlider from "../../Components/HeroSlider/herosslider";
import CategoryList from "../../Components/CategoryList/categorylist";
import useAnimeByCategory from "../../queries/useAnimeByCategory";
import useMangaByCategory from "../../queries/useMangaByCategory";
import {HomeDiv } from "../Home/home.styled"

const Home = () =>{
    return(
        <HomeDiv>
            <HeroSlider category="action"/>
            <CategoryList title="Adventure" hook={useAnimeByCategory} category="adventure" limit={10}  isManga={false} />
            <CategoryList title="Romance" hook={useAnimeByCategory} category="romance" limit={10}  isManga={false} />
            <CategoryList title="Horor" hook={useAnimeByCategory} category="horor" limit={10}  isManga={false} />
            <CategoryList title="Adventure Manga" hook={useMangaByCategory} category="adventure" limit={10} isManga={true}/>
             <CategoryList title="Action Manga" hook={useMangaByCategory} category="action" limit={10} isManga={true}/>
        </HomeDiv>
    )
}
export default Home;