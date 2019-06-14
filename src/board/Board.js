import Component from '../Component.js';
import BoardLists from './BoardLists.js';
import BoardHeader from './BoardHeader.js';

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

        const boardHeader = new BoardHeader({ board });
        dom.prepend(boardHeader.render());

        const boardLists = new BoardLists({ lists, board, onCardMenuClick, onListMenuClick });

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
