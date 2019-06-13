import Component from '../../Component.js';
import MovePositionSelect from './MovePositionSelect.js';

class MoveCardMenu extends Component {

    render() {
        const dom = this.renderDOM();

        const onMoveList = this.props.onMoveList;

        const list = this.props.list;
        const board = this.props.board;

        const movePositionSelect = new MovePositionSelect({ list, board });
        dom.prepend(movePositionSelect.render());

        dom.addEventListener('submit', event => {
            event.preventDefault();
            const fd = new FormData(dom);
            const targetPosition = fd.get('move-position-select');
            onMoveList(targetPosition);
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <form class="move-list-menu">
                <button>Submit</button>
            </form>
        `;
    }
}

export default MoveCardMenu;