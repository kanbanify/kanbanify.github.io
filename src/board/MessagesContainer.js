import Component from '../Component.js';
import AddMessage from './AddMessage.js';
import MessagesList from './MessagesList.js';

import { messagesByBoardRef, auth } from '../services/firebase.js';

class MessagesContainer extends Component {

    render() {
        const dom = this.renderDOM();

        const boardKey = this.props.boardKey;
        const messagesData = this.props.messagesData;
        

        const messagesList = new MessagesList({ boardKey, messagesData });
        dom.appendChild(messagesList.render());

        const addMessage = new AddMessage({
            onAddMessage: message => {
                const messageRef = messagesByBoardRef.child(boardKey).push();
                messageRef.set({
                    key: messageRef.key,
                    message,
                    uid: auth.currentUser.uid,
                    displayName: auth.currentUser.displayName,
                    photoURL: auth.currentUser.photoURL || './assets/default-avatar.png',
                    date: new Date().toISOString()
                });
            }
        });

        setTimeout(() => {
            dom.scrollTop = dom.scrollHeight;
        }, 0);


        dom.appendChild(addMessage.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <section class="message-container"></section>
        `;
    }
}

export default MessagesContainer;