import Component from '../Component.js';
import InvitesItem from './InvitesItem.js';

import { auth, invitesByUserRef, boardsByUserRef, usersByBoardRef } from '../services/firebase.js';

class InvitesList extends Component {

    render() {
        const dom = this.renderDOM();

        const boards = this.props.boards;

        boards.forEach(board => {
            const invitesItem = new InvitesItem({ 
                board,
                onDecline: invite => {
                    invitesByUserRef.child(auth.currentUser.uid).child(invite.key).remove();
                },
                onAccept: invite => {
                    boardsByUserRef.child(auth.currentUser.uid).child(invite.key).set({ 
                        key: invite.key
                    });
                    usersByBoardRef.child(invite.key).child(auth.currentUser.uid).set({
                        key: auth.currentUser.uid
                    });
                    invitesByUserRef.child(auth.currentUser.uid).child(invite.key).remove();
                }
            });
            dom.appendChild(invitesItem.render());
        });
        
        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="invites-list">
            </ul>
        `;
    }
}

export default InvitesList;