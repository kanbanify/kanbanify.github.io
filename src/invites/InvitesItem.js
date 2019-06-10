import Component from '../Component.js';

class InvitesItem extends Component {

    renderTemplate() {
        const board = this.props.board;

        return /*html*/`
            <li>
                <h2>${board.name}</h2>
                <button>accept</button>
                <button>decline</button>
            </li>
        `;
    }
}

export default InvitesItem;