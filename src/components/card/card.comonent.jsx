import './card.styles.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddIcon from '@mui/icons-material/Add';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Card = ({item}) => {
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
                    <div className='info'>
                        <AddIcon />
                        <span>Add to favourites</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;