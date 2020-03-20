import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import Header from '../components/Header';

/* Style-Wrapper */
const HomePageWrapper = styled.div`
  background-color: black;
  color: white;
  padding: 1rem;
`;

/* Component */
const HomePage = () =>
  <>
    <Header />
    <HomePageWrapper><h2>Home</h2></HomePageWrapper>
  </>;

/* Component PropTypes */
HomePage.propTypes = {
};

/* Page Rendering */
render(
  <HomePage />,
  document.getElementById('root'),
);
