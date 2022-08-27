import './dropdown.styles.css';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const DropDown = ({type,data,selected,setSelected}) => {

    const [isActive,setIsActive] = useState(false);

    const handleClick = item => () => {
        setSelected(item);
        setIsActive(!isActive);
    }

    return(
        <div className='wrapper'>
            <div className={`button ${isActive && 'clicked'}`} onClick={() => setIsActive(!isActive)}>
                <span className='text'>{selected ? selected : type}</span>
                <ExpandMoreIcon />
            </div>
            <div className='menu'>
                <ul>
                   {
                    data.map((item,idx) => 
                    <li
                    onClick={handleClick(item)} 
                    className="city" 
                    key={idx}>
                    {item}
                    </li>)
                   }
                </ul>
            </div>
        </div>
    )
}

export default DropDown;