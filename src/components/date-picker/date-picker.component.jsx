import './date-picker.styles.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { getSortedDays, monthNames, range,getDaysOfMonth } from '../../utils/calender';
import {format} from '../../utils/date-format';
import { useState,useContext } from 'react';
import FilterContext from '../../context/filter-context';
const DatePicker = ({type,minDate,maxDate}) => {
    const {selectDate,setSelectedDate} = useContext(FilterContext);
    const [isActive,setIsActive] = useState(false);
    const [currentMonth,setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear,setCurrentYear] = useState(new Date().getFullYear());
    const nextMonth = () => {
        if(currentMonth < 11){
            setCurrentMonth((prev) => prev +1);
        }else{
            setCurrentMonth(0);
            setCurrentYear((prev) => prev +1);
        }
    }

    const prevMonth = () => {
        if(currentMonth > 0){
            setCurrentMonth((prev) => prev -1);
        }else{
            setCurrentMonth(11);
            setCurrentYear((prev) => prev -1);
        }
    }

    const handleSelect = (e) => {
        if(e.target.id === 'day'){
            setSelectedDate(
                new Date(currentYear,currentMonth,e.target.getAttribute('data-day'))
            )
        }
    }

    const getTimeFromState = (_day) => {
        return new Date(currentYear,currentMonth,_day).getTime()
    }
    return(
        <div className='date-wrapper'>
            <div className={`date-button ${isActive && 'clicked'}`} onClick={() => setIsActive(!isActive)}>
                <span className='date-text'>{selectDate ? format(selectDate) : type}</span>
                <ExpandMoreIcon />
            </div>
            <div className='date-menu'>
                <div className='calender'>
                    <div className='calender-header'>
                    <button 
                    onClick={prevMonth}
                    disabled={minDate?.getTime() > getTimeFromState(1)}>
                        <ChevronLeftIcon />
                    </button>
                    <p>{monthNames[currentMonth]} {currentYear}</p>
                    <button 
                    onClick={nextMonth}
                    disabled={maxDate?.getTime() < getTimeFromState(getDaysOfMonth(currentYear,currentMonth))}>
                        <ChevronRightIcon />
                    </button>
                    </div>
                    <div className='calender-body'>
                        <div className='calender-grid'>
                            {
                                getSortedDays(currentYear,currentMonth).map(day => <p>{day}</p>)
                            }
                        </div>
                        <div className='calender-grid' onClick={handleSelect}>
                            {
                                range(1,getDaysOfMonth(currentYear,currentMonth)+1)
                                .map((day) => 
                                (
                                    <button
                                    disabled={
                                        minDate?.getTime() > getTimeFromState(day) ||
                                        maxDate?.getTime() < getTimeFromState(day) 
                                    } 
                                    id="day" 
                                    data-day={day} 
                                    className={selectDate?.getTime()=== new Date(currentYear,currentMonth,day).getTime() ? 'active' : ""}
                                    >
                                    {day}
                                    </button>)
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatePicker;