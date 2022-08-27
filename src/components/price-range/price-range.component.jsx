import './price-range.styles.css';
import {useState} from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const PriceRange = (props) => {
    const {
        step,
        min,
        max,
        value,
        defaultLength,
        onChangeValue,
    } = props;
    const [range,setRange] = useState(defaultLength);
    const handleChange = (max) => e => {
        onChangeValue(e);
        setRange(e.target.value);
    }

    return(
        <div className='range-container'>
            <div className='range-slider-value'>
                <CurrencyRupeeIcon />
                <span>{range}</span>
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