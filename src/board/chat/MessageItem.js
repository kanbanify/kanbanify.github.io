import Component from '../../Component.js';

class MessageItem extends Component {

    renderTemplate() {
        const message = this.props.message;
        const momentDate = moment(message.date);

        return /*html*/`
            <li class="message-item">
                <div class="details">
                    <img class="icon" src="${message.photoURL}">
                    <span class="user">${message.displayName}</span>
                    <span class="date">${momentDate.fromNow()}</span>
                </div>
                <span class="message">${message.message}</span>
            </li>
        `;
    }
}

export default MessageItem;