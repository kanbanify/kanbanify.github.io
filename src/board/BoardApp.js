import Component from '../Component.js';
import Header from '../shared/Header.js';
import Board from './Board.js';

import QUERY from '../utils/QUERY.js';

import { boardsRef, listsByBoardRef } from '../services/firebase.js';

class BoardApp extends Component {

    render() {
        const dom = this.renderDOM();

        const boardKey = QUERY.parse(window.location.search).key;

        const header = new Header();

        const board = new Board({});

        boardsRef.child(boardKey).on('value', snapshot => {
            const boardInfo = snapshot.val();
            listsByBoardRef.child(boardInfo.key).orderByChild('position').on('value', snapshot => {
                const lists = [];
                snapshot.forEach(child => {
                    lists.push(child.val());
                });
                board.update({ board: boardInfo, lists });
            });

        });

        dom.prepend(header.render());
        dom.appendChild(board.render());
   
        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
            </div>
        `;
    }
}

export default BoardApp;