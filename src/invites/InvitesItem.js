import Component from '../Component.js';

class InvitesItem extends Component {

    renderTemplate() {
        const invite = this.props.invite;

        return /*html*/`
            <li>
                <h2>${invite.boardName}</h2>
                <button>accept</button>
                <button>decline</button>
            </li>
        `;
    }
}

export default InvitesItem;