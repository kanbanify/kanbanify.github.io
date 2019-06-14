import Component from '../Component.js';
import {
    boardsRef,
    boardsByUserRef,
    usersByBoardRef,
    invitesRef,
    invitesByUserRef,
    listsByBoardRef,
    cardsByListRef,
    messagesByBoardRef
} from '../services/firebase.js';

class DeleteButton extends Component {
    render() {
        const dom = this.renderDOM();

        const board = this.props.board;

        dom.addEventListener('click', () => {
            listsByBoardRef.child(board.key).once('value', snapshot => {
                snapshot.forEach(childList => {
                    const listKey = childList.key;
                    cardsByListRef.child(listKey).remove();
                });
            });
            messagesByBoardRef.child(board.key).remove();
            listsByBoardRef.child(board.key).remove();
            usersByBoardRef.child(board.key).remove();
            boardsByUserRef.once('value', snapshot => {
                snapshot.forEach(childList => {
                    const userKey = childList.key;

                    boardsByUserRef.child(userKey).child(board.key).remove();
                });
            });

            invitesRef.orderByChild('boardKey').equalTo(board.key).once('value', snapshot => {
                const value = snapshot.val();
                const invites = value ? Object.values(value) : [];

                invites.forEach(invite => {
                    invitesByUserRef.once('value', snapshot => {
                        snapshot.forEach(childList => {
                            const userKey = childList.key;
                            invitesByUserRef.child(userKey).child(invite.key).remove();
                        });
                    });
                    invitesRef.child(invite.key).remove();
                });
            });

            boardsRef.child(board.key).remove();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <button class="delete-button">⊗</button>
        `;
    }
}

export default DeleteButton;