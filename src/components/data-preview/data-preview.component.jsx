import './data-preview.styles.css';
// import {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import { selectFilterData } from '../../store/data/data.selector';
import Card from '../card/card.comonent';


const DataPreview = () => {
    const filterList = useSelector(selectFilterData);
    return (
        <div className='data-preview-container'>
        <div className='data-preview'>
        {
            filterList.length ?
            (filterList.map(item => <Card key={item.id} item={item} id={item.id}/>))
            :
            <h1>No results</h1>
        }
        </div>
        </div>
    )
}

export default DataPreview;