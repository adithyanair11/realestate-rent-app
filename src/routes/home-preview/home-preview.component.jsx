import './home-preview.styles.css';
import { useNavigate } from 'react-router-dom';
import DataPreview from '../../components/data-preview/data-preview.component';
import Header from '../../components/header/header.component';
import Button from '../../components/custom-button/custom-button.component';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const HomePreview = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/favourites');
    }
    return(
        <div className='home-page'>
            <div className='top'>
                <Button buttonType="favourites" onClick={handleNavigate}>
                    <span><FavoriteBorderIcon /></span> favourites
                </Button>
            </div>
            <Header />
            <DataPreview />
        </div>
    )
}


export default HomePreview;