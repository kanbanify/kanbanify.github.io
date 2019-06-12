import Component from '../Component.js';
import InvitesList from './InvitesList.js';
import Header from '../shared/Header.js';

import { getBoardsFromKeys } from '../services/actions.js';

import { invitesByUserRef, auth } from '../services/firebase.js';

class InvitesApp extends Component {

    render() {
        const dom = this.renderDOM();

        const main = dom.querySelector('main');

        const header = new Header({ title: 'Board Invites' });
        
        dom.prepend(header.render());

        const invitesList = new InvitesList({ boards: [] });

        invitesByUserRef.child(auth.currentUser.uid).on('value', snapshot => {
            const boardKeys = snapshot.val() ? Object.values(snapshot.val()) : [];
            getBoardsFromKeys(boardKeys).then(boards => {
                invitesList.update({ boards });
            });
            
        });

        main.appendChild(invitesList.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                    
                </main>
            </div>
        `;
    }
}

export default InvitesApp;