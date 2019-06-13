import Component from '../Component.js';
import SendInvite from './SendInvite.js';
import BoardLists from './BoardLists.js';

import { auth, usersRef, invitesByUserRef } from '../services/firebase.js';

class Board extends Component {

    render() {
        const dom = this.renderDOM();

        const board = this.props.board;
        const lists = this.props.lists;

        const onCardMenuClick = this.props.onCardMenuClick;
        const onListMenuClick = this.props.onListMenuClick;

        if(!board) {
            return dom;
        }

        const boardLists = new BoardLists({ lists, board, onCardMenuClick, onListMenuClick });

        const sendInvite = new SendInvite({
            onSendInvite: (email) => {
                usersRef.orderByChild('email').equalTo(email).once('value', snapshot => {
                    const value = snapshot.val() ? Object.values(snapshot.val()) : [];
                    if(value.length) {
                        const uid = value[0].uid;
                        invitesByUserRef
                            .child(uid)
                            .child(board.key)
                            .set({
                                key: board.key,
                                from: auth.currentUser.displayName
                            });
                    }
                });
            }
        });

        dom.appendChild(sendInvite.render());
        dom.appendChild(boardLists.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <main class="board"></main>
        `;
    }
}

export default Board;