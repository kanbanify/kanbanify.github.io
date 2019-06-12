import Component from '../Component.js';
import BoardList from './BoardList.js';
import AddList from './AddList.js';

import { listsByBoardRef, boardsRef } from '../services/firebase.js';

class BoardLists extends Component {

    render() {
        const dom = this.renderDOM();

        const lists = this.props.lists;
        const board = this.props.board;
        const onCardMenuClick = this.props.onCardMenuClick;

        if(!lists) {
            return dom;
        }

        lists.forEach(list => {
            const boardList = new BoardList({ list, board, onCardMenuClick, lists });
            dom.appendChild(boardList.render());
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

        dom.appendChild(addList.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="board-lists"></ul>
        `;
    }
}

export default BoardLists;