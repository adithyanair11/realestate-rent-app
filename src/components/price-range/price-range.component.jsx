import './price-range.styles.css';
import {useState,useContext} from 'react';
import FilterContext from '../../context/filter-context';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const PriceRange = (props) => {
    const {rangeValue} = useContext(FilterContext)
    const {
        step,
        min,
        max,
        value,
        defaultLength,
        onChangeValue,
    } = props;
    const handleChange = (max) => e => {
        onChangeValue(e);
    }

    return(
        <div className='range-container'>
            <div className='range-slider-value'>
                <CurrencyRupeeIcon />
                <span>{rangeValue}</span>
            </div>
            <div className='slider'>
                <span>15K</span>
                <input
                className='range-slider'
                type="range"
                step={step}
                min={min}
                max={max}
                value={value}
                onChange={handleChange(max)}
                />
                <span>1L</span>
            </div>
        </div>
    )
}

export default PriceRange;