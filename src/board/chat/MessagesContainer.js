import Component from '../../Component.js';
import AddMessage from './AddMessage.js';
import MessagesList from './MessagesList.js';
import ExpandMessages from './ExpandMessages.js';

import { messagesByBoardRef, auth } from '../../services/firebase.js';

class MessagesContainer extends Component {

    render() {
        const dom = this.renderDOM();
        const messageContainer = dom.querySelector('.message-container');
        const buttonContainer = dom.querySelector('.button-container');

        const boardKey = this.props.boardKey;

        const messagesList = new MessagesList({ boardKey, messagesData: [] });
        messageContainer.appendChild(messagesList.render());

        messagesByBoardRef.child(boardKey).on('value', snapshot => {
            const messagesData = snapshot.val() ? Object.values(snapshot.val()) : [];
            messagesList.update({ messagesData });
        });

        const addMessage = new AddMessage({
            onAddMessage: message => {
                const messageRef = messagesByBoardRef.child(boardKey).push();
                messageRef.set({
                    key: messageRef.key,
                    message,
                    uid: auth.currentUser.uid,
                    displayName: auth.currentUser.displayName,
                    photoURL: auth.currentUser.photoURL || './assets/default-avatar.png',
                    date: new Date()
                });
            }
        });
        messageContainer.appendChild(addMessage.render());

        setTimeout(() => {
            dom.scrollTop = dom.scrollHeight;
        }, 0);
        
        const expandMessages = new ExpandMessages({
            expandMessages: () => {
                if(messageContainer.classList.contains('hidden')) {
                    messageContainer.classList.remove('hidden');
                    dom.style.height = '50px';
                } else {
                    messageContainer.classList.add('hidden');
                }
            }
        });

        buttonContainer.appendChild(expandMessages.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <section class="chat-container">
                <div class="button-container"></div>
                <div class="hidden message-container"></div>
            </section>
        `;
    }
}

export default MessagesContainer;