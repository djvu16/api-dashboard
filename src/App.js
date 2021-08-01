import React,{useState,useEffect} from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';

//import styles
import './App.css';

//import components for the page
import Header from "./components/header/header.component";
import HomePage from './pages/homepage/homepage.component';
import ApiDetailPage from './pages/add-api-detail-page/api-detail.component';
import SearchPage from './pages/search-page/search-page.component';
import SigninSignupPage from './pages/signin-signup-page/signin-signup-page.component';
import Signup from './components/signup/signup.component';

function App() {
  const [currentUser,setCurrentUser] = useState(false);


  useEffect(()=>{

  },[]);

  return (
    <div className="App">
      <Header 
        isCurrentUser={currentUser}
      />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/onboard" component={ApiDetailPage}/>
        <Route path="/search" component={SearchPage}/>
        <Route exact path="/signin" render={()=>(currentUser ? (<Redirect to='/'/>):(<SigninSignupPage currentUser={currentUser}
        setCurrentUser={setCurrentUser}
         />))}/>
       {/*  <Route exact path="/signin" component={SigninSignupPage} /> */}
        <Route exact path="/signup" component={Signup}/>
        {/*<Route exact path="/register" component={ApiDetailPage}/> */}
      </Switch>
    </div>
  );
}

export default App;
