import Component from '../Component.js';

class BoardItem extends Component {

    renderTemplate() {
        const board = this.props.board;

        return /*html*/`
            <a href="./board.html?key=${board.key}">
                <li>
                    <h2>${board.name}</h2>
                </li>
            </a>
        `;
    }
}

export default BoardItem;