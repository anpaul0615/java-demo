import React from 'react';
import styled from 'styled-components';

import Message from '../containers/Message';

/* Style-Wrapper */
const MessagePageWrapper = styled.div`
  background-color: grey;
  color: white;
  padding: 1rem;
`;

/* Component */
const MessagePage = () =>
  <MessagePageWrapper>
    <h2>Message Append Test</h2>
    <Message />
  </MessagePageWrapper>;

/* Component PropTypes */
MessagePage.propTypes = {
};

export default MessagePage;
