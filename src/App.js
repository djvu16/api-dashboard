import React from 'react';
import { Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';

//import styles
import './App.css';

//import components for the page
import Header from "./components/header/header.component";
import HomePage from './pages/homepage/homepage.component';
import ApiDetailPage from './pages/add-api-detail-page/api-detail.component';
import SearchPage from './pages/search-page/search-page.component';
import Signup from './components/signup/signup.component';
import Signin from './components/signin/signin.component';
import CustomRoute from './components/custom-route/custom-route.component';

function App(props) {
  const {isAuthenticated} = props;
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <CustomRoute isAuthenticated={isAuthenticated} exact path="/home" component={HomePage}/>
        <CustomRoute isAuthenticated={isAuthenticated} exact path="/onboard" component={ApiDetailPage}/>
        <CustomRoute isAuthenticated={isAuthenticated} path="/search" component={SearchPage}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = ( state ) => ({
  currentUser:state.user.currentUser,
  isAuthenticated:state.user.isAuthenticated
});

export default connect(mapStateToProps)(App);
