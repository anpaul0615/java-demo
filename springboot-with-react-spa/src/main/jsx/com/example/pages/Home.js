import React from 'react';
import styled from 'styled-components';

/* Style-Wrapper */
const HomePageWrapper = styled.div`
  background-color: black;
  color: white;
  padding: 1rem;
`;

/* Component */
const HomePage = () => <HomePageWrapper><h2>Home</h2></HomePageWrapper>;

/* Component PropTypes */
HomePage.propTypes = {
};

export default HomePage;
