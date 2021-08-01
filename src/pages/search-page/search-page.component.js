import React from 'react';
import { Route } from 'react-router-dom';


//import components
import SearchApi from '../../components/search-api/search-api.component';
import SearchApiData from '../../components/search-api-data/search-api-data.component';
import SideMenuBar from '../../components/side-menu-bar/side-menu-bar.component';
//import css
import './search-page.styles.scss';



import ApiNotFoundInstruction from '../../components/api-not-found/api-not-found.component';

import API_DATA from '../homepage/api-data';

const SearchPage = ({match})=>{
    const renderSearchApi=(routeProps)=>{
        return(
            <SearchApi 
                apiList={API_DATA}
            />
        )
    }
    const renderSearchApiData=(routeProps)=>{
        const apiId=routeProps.match.params.apiId;
        const api=API_DATA.find(api=>api.id===apiId);
        return api ? <SearchApiData api={api} /> : <ApiNotFoundInstruction id={apiId} />
    }
    return(
        <div className="search-page">
            <SideMenuBar />
            <Route exact path={`${match.path}`} component={routeProps=> renderSearchApi(routeProps)} />
            <Route path={`${match.path}/:apiId`} component={routeProps => renderSearchApiData(routeProps)} />
        </div>
    )
}

export default SearchPage;