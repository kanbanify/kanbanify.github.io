import Component from '../Component.js';
import Header from '../shared/Header.js';
import AddBoard from './AddBoard.js';
import BoardList from './BoardList.js';

import { auth, boardsRef, boardsByUserRef, usersByBoardRef } from '../services/firebase.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const main = dom.querySelector('main');

        const header = new Header({ title: 'Home' });

        const boardList = new BoardList({ boards: [] });

        boardsByUserRef.child(auth.currentUser.uid).on('value', snapshot => {
            const value = snapshot.val();
            const boardKeys = value ? Object.values(value) : [];

            const boards = [];
            boardKeys.forEach(boardKey => {
                boardsRef.child(boardKey.key).once('value', snapshot => {
                    const val = snapshot.val();
                    boards.push(val);
                    boardList.update({ boards });
                });
            });
        });


        const addBoard = new AddBoard({ 
            onAddBoard: name => {
                console.log(name);
                const boardRef = boardsRef.push();
                boardRef.set({ 
                    name,
                    key: boardRef.key,
                    owner: auth.currentUser.uid
                });

                const userBoardRef = boardsByUserRef.child(auth.currentUser.uid).child(boardRef.key);
                userBoardRef.set({
                    key: boardRef.key
                });

                const boardUserRef = usersByBoardRef.child(boardRef.key).child(auth.currentUser.uid);
                boardUserRef.set({
                    key: auth.currentUser.uid
                });

            }
        });

        dom.prepend(header.render());
        main.appendChild(addBoard.render());
        main.appendChild(boardList.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>Home Page</main>
            </div>
        `;
    }
}

export default App;