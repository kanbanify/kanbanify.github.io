import Component from '../Component.js';
import BoardItem from './BoardItem.js';

class BoardList extends Component {
    render() {
        const dom = this.renderDOM();
        const boards = this.props.boards;
        
        boards.forEach(board => {
            const boardItem = new BoardItem({ board });
            dom.appendChild(boardItem.render());
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <ul></ul>
        `;
    }
}

export default BoardList;