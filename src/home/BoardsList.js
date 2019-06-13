import Component from '../Component.js';
import BoardsItem from './BoardsItem.js';
import { auth } from '../services/firebase.js';

class BoardsList extends Component {
    render() {
        const dom = this.renderDOM();
        const boards = this.props.boards;
        const condition = this.props.condition;

        boards.forEach(board => {
            if(eval(condition)) {
                const boardsItem = new BoardsItem({ board });
                dom.appendChild(boardsItem.render());
            }
        });

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <ul class="boards-list"></ul>
        `;
    }
}

export default BoardsList;
