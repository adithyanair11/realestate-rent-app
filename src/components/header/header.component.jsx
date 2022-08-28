import './header.styles.css';
import SearchFilter from '../search-filter/search-filter.component';
import Search from '../search/search.component';
import FilterContext from '../../context/filter-context';
import { useContext } from 'react';
const Header = () => {
    
    const {searchField,setSearchField} = useContext(FilterContext);
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
            <SearchFilter searchField={searchField} setSearchField={setSearchField} />
            <div className='header-fade'></div>
        </div>
    )
}

export default Header;