import React, { Component } from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import MessageItem from '../components/MessageItem';


/* Component */
@inject('messageStore')
@observer
class MessageContainer extends Component {
  appendWelcomeMessage() {
    const { messageStore } = this.props;
    messageStore.add('Wecome!!');
  }

  render() {
    const { messageStore } = this.props;
    const { messages } = messageStore;
    return (
      <>
        <button type="button" onClick={() => this.appendWelcomeMessage()}>
          Get Message
        </button>
        {messages.map((e, idx) => <MessageItem key={idx.toString()} message={e} />)}
      </>
    );
  }
}

/* Component PropTypes */
MessageContainer.propTypes = {
};

export default MessageContainer;
