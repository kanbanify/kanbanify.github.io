import Component from '../Component.js';
import BoardList from './BoardList.js';

class BoardLists extends Component {

    render() {
        const dom = this.renderDOM();

        const lists = this.props.lists;

        if(!lists) {
            return dom;
        }

        lists.forEach(list => {
            const boardList = new BoardList({ list });
            dom.appendChild(boardList.render());
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <ul></ul>
        `;
    }
}

export default BoardLists;