import { Route,Routes } from "react-router-dom";
import HomePreview from "../home-preview/home-preview.component";
import FavouritesPage from '../favourites-page/favourites-page.components';


const Home = () => {
    return(
            <Routes>
                <Route index element={<HomePreview />}/>
                <Route path="/favourites" element={<FavouritesPage />}/>
           </Routes>
    )
}


export default Home;