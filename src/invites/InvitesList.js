import Component from '../Component.js';
import InvitesItem from './InvitesItem.js';

class InvitesList extends Component {

    render() {
        const dom = this.renderDOM();

        const boards = this.props.boards;

        boards.forEach(board => {
            const inviteItem = new InvitesItem({ board });
            dom.appendChild(inviteItem.render());
        });
        
        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <ul>
            </ul>
        `;
    }
}

export default InvitesList;