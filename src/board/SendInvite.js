import Component from '../Component.js';

class SendInvite extends Component {

    render() {
        const dom = this.renderDOM();
        const expandButton = dom.querySelector('.expand-button');
        const form = dom.querySelector('form');
        const input = dom.querySelector('input');
        const sendButton = dom.querySelector('.send-button');
        const onSendInvite = this.props.onSendInvite;

        form.addEventListener('submit', event => {
            event.preventDefault();
            onSendInvite(input.value);
            input.classList.add('hidden');
            sendButton.classList.add('hidden');
        });

        expandButton.addEventListener('click', () => {
            input.classList.remove('hidden');
            sendButton.classList.remove('hidden');
        });


        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <section class="send-invite">
                <button class="expand-button">
                    <p>Invite people to collaborate!</p>
                    <img src="/assets/envelope.png">
                </button>
                <form>
                    <input placeholder="Enter an email..." class="invite-input hidden">
                    <button class="send-button hidden">Send Invite</button>
                </form>
            </section>
        `;
    }
}

export default SendInvite;