import { useEffect } from 'react';
import {Routes,Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getDataList,getFilterList} from './store/data/data.action'
import dataList from './data';
import Home from "./routes/home/home.component";
function App() {
  const dispatch = useDispatch();

  // dispatch the data list to redux store
  useEffect(() => {
    dispatch(getDataList(dataList));
    dispatch(getFilterList(dataList));
  },[]);

  return (
   <Routes>
    <Route index element={<Home />} />
   </Routes>
  );
}

export default App;
