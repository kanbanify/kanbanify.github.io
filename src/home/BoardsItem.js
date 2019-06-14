import Component from '../Component.js';

class BoardsItem extends Component {

    renderTemplate() {
        const board = this.props.board;

        return /*html*/`
            <a class="board-item" href="./board.html?key=${board.key}">
                <li>
                    <h2>${board.name}</h2>
                </li>
            </a>
        `;
    }
}

export default BoardsItem;