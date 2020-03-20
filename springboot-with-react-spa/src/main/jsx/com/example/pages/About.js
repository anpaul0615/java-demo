import React from 'react';
import styled from 'styled-components';

/* Style-Wrapper */
const AboutPageWrapper = styled.div`
  background-color: black;
  color: white;
  padding: 1rem;
`;

/* Component */
const AboutPage = () => <AboutPageWrapper><h2>About</h2></AboutPageWrapper>;

/* Component PropTypes */
AboutPage.propTypes = {
};

export default AboutPage;
