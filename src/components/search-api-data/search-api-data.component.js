import React,{useState} from 'react';

//import component
import SearchApiCard from '../search-api-card/search-api-card.component';
import ApiNotFoundInstruction from '../api-not-found/api-not-found.component';
//import styles
import './search-api-data.styles.scss';

//import data
import API_DATA from '../../pages/homepage/api-data';

const SearchApiData = ({match}) =>{
    const [apiList]=useState(API_DATA);
    const apiId=parseInt(match.params.apiId);
    const filteredList=apiList.filter(api=>(api.id===apiId));
    console.log(filteredList);
    return(
        <div className='search-api-data'>
            {
                filteredList.length ? <SearchApiCard api={filteredList} />
                :
                <ApiNotFoundInstruction 
                    id={apiId}
                    apiName=''
                    consumer=''
                    producer=''
                />
            }
        </div>
    )
}


export default SearchApiData;