import Component from '../Component.js';
import SendInvite from './SendInvite.js';
import AddList from './AddList.js';
import BoardLists from './BoardLists.js';

import { usersRef, invitesByUserRef, listsByBoardRef, boardsRef }
    from '../services/firebase.js';

class Board extends Component {

    render() {
        const dom = this.renderDOM();

        const board = this.props.board;
        const lists = this.props.lists;

        if(!board) {
            return dom;
        }

        const boardLists = new BoardLists({ lists });

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

                const listRef = listsByBoardRef.child(board.key).push();
                listRef.set({
                    key: listRef.key,
                    position: board.listCount + 1,
                    name: list,
                    cardCount: 0
                });
                
                boardsRef.child(board.key).update({
                    listCount: board.listCount + 1
                });
            }
        });

        dom.appendChild(sendInvite.render());

        dom.appendChild(boardLists.render());

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