import Component from '../Component.js';
import SendInvite from './SendInvite.js';
import QUERY from '../utils/QUERY.js';

import { usersRef, invitesByUserRef } from '../services/firebase.js';

class BoardApp extends Component {

    render() {
        const dom = this.renderDOM();

        const boardKey = QUERY.parse(window.location.search).key;

        const sendInvite = new SendInvite({
            onSendInvite: (email) => {
                usersRef.orderByChild('email').equalTo(email).once('value', snapshot => {
                    const value = snapshot.val() ? Object.values(snapshot.val()) : [];
                    if(value.length) {
                        const uid = value[0].uid;
                        invitesByUserRef
                            .child(uid)
                            .child(boardKey)
                            .set({ key: boardKey });
                    }
                });
            }
        });

        dom.appendChild(sendInvite.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>Board</main>
            </div>
        `;
    }
}

export default BoardApp;