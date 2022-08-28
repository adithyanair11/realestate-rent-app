import './card.styles.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch,useSelector } from 'react-redux';
import { useContext,useState } from 'react';
import { selectFavourites } from '../../store/favourites/favourites.selector';
import { addItemToList} from '../../store/favourites/favourites.action';
import FilterContext from '../../context/filter-context';
const Card = ({item,id}) => {
    const [clicked,setClicked] = useState(false);
    const dispatch = useDispatch();
    const favList = useSelector(selectFavourites);
    const handleClick = () => {
        dispatch(addItemToList(favList,item))
        setClicked(!clicked);
    }
    return (
        <div className='card'>
            <div className='image-container'>
                <img
                className='image' 
                src={item.image} alt="property"/>
            </div>
            <div className='item-details'>
                <div className='location-details'>
                    <h3 className='address'>
                        {item.address}
                    </h3>
                    <div className='location'>
                        <LocationOnIcon />
                        <span>{item.city},{item.state}</span>
                    </div>
                </div>
                <div className='price'>
                    <CurrencyRupeeIcon /> 
                    <span>{item.price}/month</span>
                </div>
                <div className='property-type'>
                    <ApartmentIcon />
                    <span>{item.property.type}</span> 
                </div>
                <div className='property-details'>
                    <div className='info'>
                        <BedIcon />
                        <span>{item.beds} Beds</span>
                    </div>
                    <div className='info'>
                        <BathtubIcon />
                        <span>{item.baths} Baths</span>
                    </div>
                    <div className='info'>
                        <SquareFootIcon />
                        <span>{item.squareFeet} sqft</span>
                    </div>
                    <div className='info' onClick={handleClick}>
                    {
                        favList.find(fav => fav.id === id) ?
                        (<FavoriteIcon />)
                        :
                        (<FavoriteBorderIcon />)
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;