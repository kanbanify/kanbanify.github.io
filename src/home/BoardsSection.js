import Component from '../Component.js';
import BoardsHeader from './BoardsHeader.js';
import BoardsList from './BoardsList.js';
import BoardsListAll from './BoardsListAll.js';

class BoardsSection extends Component {
    render() {
        const dom = this.renderDOM();

        const boards = this.props.boards;

        const personalHeader = new BoardsHeader({
            title: 'Personal Boards',
            image: '../../assets/personal-boards.png'
        });
        const colabHeader = new BoardsHeader({
            title: 'Collaborative Boards',
            image: '../../assets/collaborative-boards.png'
        });

        const boardsList = new BoardsList({ boards });
        const boardsListAll = new BoardsListAll({ boards });

        dom.appendChild(personalHeader.render());
        dom.appendChild(boardsList.render());

        dom.appendChild(colabHeader.render());
        dom.appendChild(boardsListAll.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div class="boards-section"></div>
        `;
    }
}

export default BoardsSection;
