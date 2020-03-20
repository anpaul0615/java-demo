import * as React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { Provider } from 'mobx-react';

import Header from '../components/Header';
import Message from '../containers/Message';
import MessageStore from '../stores/message';

const stores = {
  messageStore: new MessageStore(),
};

/* Style-Wrapper */
const MessagePageWrapper = styled.div`
  background-color: grey;
  color: white;
  padding: 1rem;
`;

/* Component */
const MessagePage = () => 
  <>
    <Header />
    <MessagePageWrapper>
      <h2>Message Append Test</h2>
      <Message />
    </MessagePageWrapper>
  </>;

/* Component PropTypes */
MessagePage.propTypes = {
};

/* Page Rendering */
render(
  <Provider {...stores}>
    <MessagePage />
  </Provider>,
  document.getElementById('root'),
);

