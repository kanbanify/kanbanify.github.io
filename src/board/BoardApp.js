import Component from '../Component.js';
import Board from './Board.js';

import QUERY from '../utils/QUERY.js';

import { boardsRef } from '../services/firebase.js';

class BoardApp extends Component {

    render() {
        const dom = this.renderDOM();

        const boardKey = QUERY.parse(window.location.search).key;

        const board = new Board({});

        boardsRef.child(boardKey).on('value', snapshot => {
            const value = snapshot.val();
            board.update({ board: value });
        });

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