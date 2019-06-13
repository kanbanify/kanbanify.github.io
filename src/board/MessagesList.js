import Component from '../Component.js';
import MessageItem from './MessageItem.js';

// import { messagesByBoardRef, auth } from '../services/firebase.js';

class MessagesList extends Component {

    render() {
        const dom = this.renderDOM();

        const messagesData = this.props.messagesData;

        messagesData.forEach(message => {
            const messageItem = new MessageItem({ message });
            dom.appendChild(messageItem.render());
        });

        // const addMessage = new AddMessage({
        //     onAddMessage: message => {
        //         const messageRef = messagesByBoardRef.child(boardKey).push();
        //         messageRef.set({
        //             key: messageRef.key,
        //             message,
        //             uid: auth.currentUser.uid,
        //             displayName: auth.currentUser.displayName,
        //             photoURL: auth.currentUser.photoURL || './assets/default-avatar.png',
        //             date: new Date().toISOString()
        //         });
        //     }
        // });

        setTimeout(() => {
            dom.scrollTop = dom.scrollHeight;
        }, 0);


        // dom.appendChild(addMessage.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="message-list"></ul>
        `;
    }
}

export default MessagesList;