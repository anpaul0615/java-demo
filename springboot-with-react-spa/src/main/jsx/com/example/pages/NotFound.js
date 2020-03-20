import React from 'react';
import styled from 'styled-components';

/* Style-Wrapper */
const NoutFoundPageWrapper = styled.div`
  background-color: black;
  color: white;
  padding: 1rem;
`;

/* Component */
const NoutFoundPage = () => <NoutFoundPageWrapper><h2>Not Found</h2></NoutFoundPageWrapper>;

/* Component PropTypes */
NoutFoundPage.propTypes = {
};

export default NoutFoundPage;
