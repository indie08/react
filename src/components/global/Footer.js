//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import logo from './images/logo.svg';
import './css/Footer.css';

class Footer extends Component {
  static  propTypes={
    copyright:PropTypes.string
  }
  render() {
    const {copyright='&copy; 2017'}=this.props;
    return (
      <div className="Footer">
        <p dangerouslySetInnerHTML={{ __html: copyright }} />
      </div>
    );
  }
}

export default Footer;
