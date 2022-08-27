import './home.styles.css';
import DataPreview from '../../components/data-preview/data-preview.component';
import Header from '../../components/header/header.component';
const Home = () => {
    return(
        <div className='home-page'>
            <Header />
            <DataPreview />
        </div>
    )
}


export default Home;