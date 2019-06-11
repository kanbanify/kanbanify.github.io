import Component from '../Component.js';
import SendInvite from './SendInvite.js';
import AddList from './AddList.js';

import { usersRef, invitesByUserRef, listsByBoardRef }
    from '../services/firebase.js';

class Board extends Component {

    render() {
        const dom = this.renderDOM();

        const board = this.props.board;

        if(!board) {
            return dom;
        }

        const sendInvite = new SendInvite({
            onSendInvite: (email) => {
                usersRef.orderByChild('email').equalTo(email).once('value', snapshot => {
                    const value = snapshot.val() ? Object.values(snapshot.val()) : [];
                    if(value.length) {
                        const uid = value[0].uid;
                        invitesByUserRef
                            .child(uid)
                            .child(board.key)
                            .set({ key: board.key });
                    }
                });
            }
        });

        const addList = new AddList({
            onAddList: list => {
                console.log(list);

                const listRef = listsByBoardRef.child(board.key).push();
                listRef.set({
                    key: listRef.key,

                });
            }
        });

        dom.appendChild(sendInvite.render());

        dom.appendChild(addList.render());
        
        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <main>Board</main>
        `;
    }
}

export default Board;