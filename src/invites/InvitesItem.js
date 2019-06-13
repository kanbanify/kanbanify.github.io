import Component from '../Component.js';

class InvitesItem extends Component {

    render() {
        const dom = this.renderDOM();
        const acceptButton = dom.querySelector('.accept');
        const declineButton = dom.querySelector('.decline');

        const onAccept = this.props.onAccept;
        const onDecline = this.props.onDecline;
        const board = this.props.board;
        console.log(board);

        declineButton.addEventListener('click', () => {
            onDecline(board);
        });

        acceptButton.addEventListener('click', () => {
            onAccept(board);
        });

        return dom;
    }

    renderTemplate() {
        const board = this.props.board;

        return /*html*/`
            <li class="invite-item">
                <h2>${board.boardName}</h2>
                <p>${board.from}</p>
                <div class="button-container">
                    <button class="accept">accept</button>
                    <button class="decline">decline</button>
                </div>
            </li>
        `;
    }
}

export default InvitesItem;