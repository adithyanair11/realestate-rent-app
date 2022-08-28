import './search-filter.styles.css';
import { useDispatch,useSelector } from 'react-redux';
import { selectDataList } from '../../store/data/data.selector';
import { getFilterList } from '../../store/data/data.action';
import { useEffect } from 'react';
import FilterContext from '../../context/filter-context';
import { useContext } from 'react';
import DropDown from '../dropdown/dropdown.component';
import PriceRange from '../price-range/price-range.component';
import DatePicker from '../date-picker/date-picker.component';

const SearchFilter = ({searchField,setSearchField}) => {
    const dispatch = useDispatch();

    const dataList = useSelector(selectDataList);

    const {city,setCity,prop,setProp,rangeValue,setRangeValue} = useContext(FilterContext);

    const onChangeSlider = (e) => {
        setRangeValue(parseInt(e.target.value,10))
    }

    const cities = [...new Set(dataList.map(item => item.city))];
    const properties = [...new Set(dataList.map(item => item.property.type))];

    const applyFilters = () => {
        let updatedList = dataList;

        if(searchField){
            updatedList = updatedList.filter((value) => {
                return value.address.toLowerCase().includes(searchField.toLowerCase())
            });
        }

        if(city){
            updatedList = updatedList.filter(item => item.city === city);
        }

        if(prop){
            updatedList = updatedList.filter(item => item.property.type === prop);
        }

        if(rangeValue){
            updatedList = updatedList.filter(item => item.price <= rangeValue);
        }

        dispatch(getFilterList(updatedList));
    }

    useEffect(() => {
        applyFilters();
    },[searchField,city,prop,rangeValue])


    const resetFilters = () => {
        setCity("");
        setProp("");
        setRangeValue(100000);
        setSearchField("");
    }

    return(
        <div className='search-filter'>
            <div className='filter'>
                <span className='title'>Location</span>
                <DropDown type="city" data={cities} selected={city} setSelected={setCity}/>
            </div>
            <div className='filter'>
                <span className='title'>Property Type</span>
                <DropDown type="property" data={properties} selected={prop} setSelected ={setProp}/>
            </div>
            <div className='filter'>
            <span className='title'>Move-in-date</span>
            <DatePicker minDate={new Date()} maxDate={new Date(2022,10,22)}/>
            </div>
            <div className='filter'>
                <span className='title'>Price Range</span>
                <PriceRange
                min={15000}
                max={100000}
                step={5000}
                defaultLength={rangeValue}
                value={rangeValue}
                onChangeValue={onChangeSlider}
                />
            </div>
            <button className='reset-button' onClick={resetFilters}>Reset</button>
        </div>
    )
}

export default SearchFilter;