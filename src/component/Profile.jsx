import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';



const Profile = (props) => {

    // useEffect(() => {
    //     props.getUser()
    // }, []);

  return (
      <div className="profile">
        <div className="profile__card">
            <div>
                <div className="profile__headers">
                    <div className="profile__headers__details">
                        <div className="profile__header"> Full name</div>
                        <div className="profile__value"> Super amin</div>
                    </div>
                    <div>edit</div>
                </div>
                <div className="profile__headers">
                    <div>
                        <div className="profile__header"> Full name</div>
                        <div className="profile__value"> Super amin</div>
                    </div>
                </div>
            </div>
            <div className="profile__options">
              <div className="profile__options__option">
                password 
              </div>
              <div className="profile__options__option">
                 laguage
              </div>
              <div className="profile__options__option">
                 logout
              </div>

            </div>
        </div>
      </div>
  )
};

Profile.propTypes = {

};

export default Profile;