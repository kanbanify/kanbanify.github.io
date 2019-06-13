import Component from '../../Component.js';
import MessageItem from './MessageItem.js';

class MessagesList extends Component {

    render() {
        const dom = this.renderDOM();
        
        const messagesData = this.props.messagesData;

        messagesData.forEach(message => {
            const messageItem = new MessageItem({ message });
            dom.appendChild(messageItem.render());
        });

        setTimeout(() => {
            dom.scrollTop = dom.scrollHeight;
        }, 0);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="message-list"></ul>
        `;
    }
}

export default MessagesList;