import Component from '../Component.js';
import BoardsHeader from './BoardsHeader.js';
import BoardsList from './BoardsList.js';

class BoardsSection extends Component {
    render() {
        const dom = this.renderDOM();

        const boards = this.props.boards;

        const header = new BoardsHeader();
        const boardsList = new BoardsList({ boards });

        dom.appendChild(header.render());
        dom.appendChild(boardsList.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div class="boards-section"></div>
        `;
    }
}

export default BoardsSection;
