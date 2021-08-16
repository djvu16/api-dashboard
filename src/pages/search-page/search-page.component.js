import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';

//import components
import SearchApi from '../../components/search-api/search-api.component';
import SearchApiCard from '../../components/search-api-card/search-api-card.component';
import SideMenuBar from '../../components/side-menu-bar/side-menu-bar.component';
//import css
import './search-page.styles.scss';



import ApiNotFoundInstruction from '../../components/api-not-found/api-not-found.component';

/* import API_DATA from '../homepage/api-data'; */

const SearchPage = (props)=>{
    const {match,api} = props;
    const {apiList}=api;
    const renderSearchApi=(routeProps)=>{
        return(
            <SearchApi 
                apiList={apiList.apiDtls}
            />
        )
    }
    const renderSearchApiData=(routeProps)=>{
        const apiId=routeProps.match.params.apiId;
        const api=apiList.apiDtls.find(api=>api._id===apiId);
        return api ? <SearchApiCard api={api} /> : <ApiNotFoundInstruction id={apiId} />
    }
    return(
        <div className="search-page">
            <SideMenuBar />
            <Route exact path={`${match.path}`} component={routeProps=> renderSearchApi(routeProps)} />
            <Route path={`${match.path}/:apiId`} component={routeProps => renderSearchApiData(routeProps)} />
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        api:state.api
    }
)

export default connect(mapStateToProps)(SearchPage);