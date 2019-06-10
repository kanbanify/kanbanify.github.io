import Component from '../Component.js';

class SendInvite extends Component {

    render() {
        const dom = this.renderDOM();
        const input = dom.querySelector('input');

        const onSendInvite = this.props.onSendInvite;

        dom.addEventListener('submit', event => {
            event.preventDefault();
            onSendInvite(input.value);
            dom.reset();
        });
        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <form>
                <input>
                <button>Send Invite</button>
            </form>
        `;
    }
}

export default SendInvite;