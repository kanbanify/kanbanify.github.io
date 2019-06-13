import Component from '../../Component.js';
import MovePositionOption from './MovePositionOption.js';

class MovePositionSelect extends Component {

    render() {
        const dom = this.renderDOM();

        const list = this.props.list;
        const board = this.props.board;

        for(let i = 1; i <= board.listCount; i++) {
            const movePositionOption = new MovePositionOption({ list, position: i });
            dom.appendChild(movePositionOption.render());
        }

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <select name="move-position-select"></select>
        `;
    }
}

export default MovePositionSelect;