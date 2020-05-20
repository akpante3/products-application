import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile'
import Contact from './Contact'
import './Profile.scss'
import {
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";


const Home = (props) => {
  return (
      <div className="home">
          <aside className="side-bar">
               <div>
                   <img src="" alt="logo"/>
               </div>
               <div className="side-bar__links">
                    <Link to='/'><div className="side-bar__links__link"> Profile</div></Link>
                    <Link to='/contact'><div className="side-bar__links__link"> Help</div></Link>
               </div>
          </aside>
          <div className="home__section">
            <Switch>
                <Route name="Profile" exact path='/' component={Profile} />
                <Route name="contact" path='/contact' component={Contact} />
            </Switch>
          </div>
      </div>
  )
};

Home.propTypes = {

};

export default Home;
