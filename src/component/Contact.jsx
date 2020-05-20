import React from 'react';
import PropTypes from 'prop-types';



const Contact = (props) => {
  return (
      <div className="contact">
        <div className="contact__header"> Contact us</div>
        <div>let know how we can help</div>
        <textarea />
        <button className="btn"> send </button>
      </div>
  )
};

Contact.propTypes = {

};

export default Contact;