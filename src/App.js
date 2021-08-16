import React,{useEffect} from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//import styles
import './App.css';

//import components for the page
import Header from "./components/header/header.component";
import HomePage from './pages/homepage/homepage.component';
import ApiDetailPage from './pages/add-api-detail-page/api-detail.component';
import SearchPage from './pages/search-page/search-page.component';
import SigninSignupPage from './pages/signin-signup-page/signin-signup-page.component';
import Signup from './components/signup/signup.component';

function App(props) {
  const {currentUser,isAuthenticated} = props;


  useEffect(()=>{

  },[]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/onboard" component={ApiDetailPage}/>
        <Route path="/search" component={SearchPage}/>
        <Route exact path="/signin" render={()=>(isAuthenticated ? (<Redirect to='/'/>):(<SigninSignupPage />))}/>
       {/*  <Route exact path="/signin" component={SigninSignupPage} /> */}
        <Route exact path="/signup" component={ isAuthenticated ? (<Redirect to='/' />) :  Signup}/>
        {/*<Route exact path="/register" component={ApiDetailPage}/> */}
      </Switch>
    </div>
  );
}

const mapStateToProps = ( state ) => ({
  currentUser:state.user.currentUser,
  isAuthenticated:state.user.isAuthenticated
});

export default connect(mapStateToProps)(App);
