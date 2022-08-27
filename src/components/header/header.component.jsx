import './header.styles.css';
import SearchFilter from '../search-filter/search-filter.component';
import Search from '../search/search.component';
import { useState} from 'react';

const Header = () => {
    const [searchField,setSearchField] = useState('');

    const handleChange = (e) => {
        const searchTerm = e.target.value;
        setSearchField(searchTerm);
    }

    return(
        <div className='header'>
            <Search
            placeholder="Enter address or locality"
            handleChange={handleChange}
            searchField={searchField}
            setSearchField={setSearchField}
            />
            <SearchFilter searchField={searchField} setSearchField={setSearchField}/>
        </div>
    )
}

export default Header;