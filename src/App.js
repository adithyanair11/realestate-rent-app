import { useEffect } from 'react';
import {Routes,Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getDataList,getFilterList} from './store/data/data.action'
import dataList from './data';
import Home from "./routes/home/home.component";
import {FilterProvider} from './context/filter-context';
function App() {
  const dispatch = useDispatch();

  // dispatch the data list to redux store
  useEffect(() => {
    dispatch(getDataList(dataList));
    dispatch(getFilterList(dataList));
  },[]);

  return (
   <FilterProvider>
    <Routes>
      <Route path="/*" element={<Home />} />
    </Routes>
   </FilterProvider>
  );
}

export default App;
