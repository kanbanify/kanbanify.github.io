import Component from '../Component.js';
import BoardsItem from './BoardsItem.js';

class BoardsList extends Component {
    render() {
        const dom = this.renderDOM();
        const boards = this.props.boards;
        
        boards.forEach(board => {
            const boardsItem = new BoardsItem({ board });
            dom.appendChild(boardsItem.render());
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <ul></ul>
        `;
    }
}

export default BoardsList;