import Component from '../Component.js';
import SendInvite from '../board/SendInvite.js';

import { auth, usersRef, invitesRef, invitesByUserRef } from '../services/firebase.js';

class BoardHeader extends Component {

    render() {
        const dom = this.renderDOM();

        const board = this.props.board;

        const sendInvite = new SendInvite({
            onSendInvite: (email) => {
                const inviteRef = invitesRef.push();
                inviteRef
                    .set({
                        key: inviteRef.key,
                        boardKey: board.key,
                        from: auth.currentUser.displayName,
                        boardName: board.name
                    });

                usersRef.orderByChild('email').equalTo(email).once('value', snapshot => {
                    const value = snapshot.val() ? Object.values(snapshot.val()) : [];
                    if(value.length) {
                        const uid = value[0].uid;
                        invitesByUserRef
                            .child(uid)
                            .child(inviteRef.key)
                            .set({
                                key: inviteRef.key
                            });
                    }
                });
            }
        });

        dom.appendChild(sendInvite.render());
        return dom;
    }

    renderTemplate() {
        const board = this.props.board;
        return /*html*/ `
            <section class="board-header">
                <h3>${board.name}</h3>
            </section>
        `;
    }
}

export default BoardHeader;