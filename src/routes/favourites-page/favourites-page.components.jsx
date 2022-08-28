import './favourites-page.styles.css';
import {useSelector} from 'react-redux'
import { selectFavourites } from '../../store/favourites/favourites.selector';
import Button from '../../components/custom-button/custom-button.component';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/card/card.comonent';
const FavouritesPage = () => {
    const navigate = useNavigate();
    const favList = useSelector(selectFavourites);
    return(
        <div className='fav-page'>
        {
            favList.length ?
            (<div className='fav-list-container'>
            <div className='fav-head'>
                <div>
                    <h1>Favourites</h1>
                    <span>Find your saved properties</span>
                </div>
                <div>
                    <Button onClick={() => navigate('/')}>go back</Button>
                </div>
            </div>
            <div className='favourites'>
                {
                    favList.map(item => <Card key={item.id} item={item}/>)
                }
            </div>
        </div>)
        :
        (<div className='empty'>
            <h1>You have not saved your favourites.</h1>
            <Button onClick={() => navigate('/')}>go back</Button>
        </div>)
        }
        </div>
    )
}

export default FavouritesPage;