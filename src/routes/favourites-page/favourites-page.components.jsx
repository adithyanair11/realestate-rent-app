import './favourites-page.styles.css';
import {useSelector} from 'react-redux'
import { selectFavourites } from '../../store/favourites/favourites.selector';
import Card from '../../components/card/card.comonent';
const FavouritesPage = () => {
    const favList = useSelector(selectFavourites);
    return(
        <div className='fav-page'>
            <div className='fav-list-container'>
                <div className='fav-head'>
                    <h1>Favourites</h1>
                    <span>Find your saved properties</span>
                    {
                        favList.map(item => <Card key={item.id} item={item}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default FavouritesPage;