import Component from '../../Component.js';

class ExpandMessages extends Component {

    render() {
        const dom = this.renderDOM();

        const expandMessages = this.props.expandMessages;

        dom.addEventListener('click', () => {
            expandMessages();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <button class="expand-messages-button">
                <img src="/assets/chat-icon.png">
            </button>
        `;
    }
}

export default ExpandMessages;