import Component from '../Component.js';
import DeleteButton from '../shared/DeleteButton.js';

class BoardsItem extends Component {
    render() {
        const dom = this.renderDOM();

        const board = this.props.board;

        const deleteButton = new DeleteButton({ board });
        dom.prepend(deleteButton.render());

        return dom;
    }

    renderTemplate() {
        const board = this.props.board;

        return /*html*/`
            <div class="board-item">
                <a class="board-link" href="./board.html?key=${board.key}">
                    <li>
                        <h2>${board.name}</h2>
                    </li>
                </a>
            </div>
        `;
    }
}

export default BoardsItem;