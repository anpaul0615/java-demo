import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* Style-Wrapper */
const MessageItemWrapper = styled.p`
  color: white;
  text-decoration: underline;
`;

/* Component */
const MessageItem = ({ message }) =>
  <MessageItemWrapper>{message}</MessageItemWrapper>;

/* Component PropTypes */
MessageItem.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageItem;
