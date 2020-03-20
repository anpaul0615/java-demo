import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to="/www/home">Home</Link>
      &nbsp; / &nbsp;
      <Link to="/www/about">About</Link>
      &nbsp; / &nbsp;
      <Link to="/www/message">Message</Link>
      <hr/>
    </>
  );
};

export default Header;
