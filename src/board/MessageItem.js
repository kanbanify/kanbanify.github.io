import Component from '../Component.js';

class MessageItem extends Component {

    renderTemplate() {
        const message = this.props.message;
        const date = new Date(message.date);
        return /*html*/`
            <li class="message-item">
                <div>
                    <img src="${message.photoURL}">
                    <span>${message.displayName}</span>
                    <span>${date.toLocaleDateString()} ${date.toLocaleTimeString()}</span>
                </div>
                <span>${message.message}</span>
            </li>
        `;
    }
}

export default MessageItem;