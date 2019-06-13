import Component from '../../Component.js';

class AddMessage extends Component {

    render() {
        const dom = this.renderDOM();
        const input = dom.querySelector('input');
    
        const onAddMessage = this.props.onAddMessage;

        dom.addEventListener('submit', event => {
            event.preventDefault();
            onAddMessage(input.value);
            dom.reset();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <form class="message-form">
                <input required placeholder="Type a message...">
                <button>Send</button>
            </form>
        `;
    }
}

export default AddMessage;