import Component from '../Component.js';

class BoardItem extends Component {

    renderTemplate() {
        const board = this.props.board;

        return /*html*/`
            <li>
                <h2>${board.name}</h2>
            </li>
        `;
    }
}

export default BoardItem;