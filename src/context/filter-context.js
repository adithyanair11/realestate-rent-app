import { createContext,useState } from "react";

const FilterContext = createContext()

export const FilterProvider = ({children}) => {
    const [rangeValue,setRangeValue] = useState(100000);
    const [city,setCity] = useState("");
    const [prop,setProp] = useState("");
    const [searchField,setSearchField] = useState("");
    const [clicked,setClicked] = useState(false);
    const [selectDate,setSelectedDate] = useState(null);
    return(
        <FilterContext.Provider value={{city,setCity,prop,setProp,rangeValue,setRangeValue,searchField,setSearchField,clicked,setClicked,selectDate,setSelectedDate}}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContext;