import './search.styles.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
const Search = ({type,placeholder,handleChange,searchField,setSearchField}) => {
    return(
        <div className="search">
            <input 
            className="search-box"
            type={type}
            placeholder={placeholder}
            value={searchField}
            onChange={handleChange}/>
            <div className='search-icon'>
                {
                    searchField ? 
                    (<CloseIcon onClick={(e) => {
                        setSearchField('');
                        e.target.value = '';
                    }}/>)
                    :
                    (<SearchIcon />)
                }
            </div>
        </div>
    )
}

export default Search;