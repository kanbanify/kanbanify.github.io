import Component from '../Component.js';
import MoveListOption from './MoveListOption.js';

class MoveListSelect extends Component {

    render() {
        const dom = this.renderDOM();

        const lists = this.props.lists;
        const list = this.props.list;
        const onListChange = this.props.onListChange;

        lists.forEach(childList => {
            const moveListOption = new MoveListOption({ list: childList, currentList: list });
            dom.appendChild(moveListOption.render());
        });

        dom.addEventListener('change', (event) => {
            onListChange(event.target.value);
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <select class="move-list-select" name="move-list-select">
            </select>
        `;
    }
}

export default MoveListSelect;