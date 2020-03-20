import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import Header from '../components/Header';

/* Style-Wrapper */
const AboutPageWrapper = styled.div`
  background-color: black;
  color: white;
  padding: 1rem;
`;

/* Component */
const AboutPage = () =>
  <>
    <Header />
    <AboutPageWrapper><h2>About</h2></AboutPageWrapper>
  </>;

/* Component PropTypes */
AboutPage.propTypes = {
};

/* Page Rendering */
render(
  <AboutPage />,
  document.getElementById('root'),
);
