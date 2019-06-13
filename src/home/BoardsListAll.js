import Component from '../Component.js';
import BoardsItem from './BoardsItem.js';
import { auth } from '../services/firebase.js';

class BoardsListAll extends Component {
    render() {
        const dom = this.renderDOM();
        const boards = this.props.boards;
        
        boards.forEach(board => {
            if(board.owner !== (auth.currentUser.uid)) {
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

export default BoardsListAll;