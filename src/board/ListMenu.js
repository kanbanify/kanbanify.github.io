import Component from '../Component.js';
import EditListMenu from './EditListMenu.js';
import MoveListMenu from './MoveList/MoveListMenu.js';

class ListMenu extends Component {

    render() {
        const dom = this.renderDOM();

        const onClickAway = this.props.onClickAway;
        const onDeleteList = this.props.onDeleteList;
        const onEditList = this.props.onEditList;
        const onMoveList = this.props.onMoveList;

        const list = this.props.list;
        const board = this.props.board;

        const overlay = dom.querySelector('.overlay');
        const deleteButton = dom.querySelector('.delete');
        const editButton = dom.querySelector('.edit');
        const moveButton = dom.querySelector('.move');

        const editListMenu = new EditListMenu({ onEditList });
        const editListMenuDOM = editListMenu.render();

        const moveListMenu = new MoveListMenu({ list, board, onMoveList });
        const moveListMenuDOM = moveListMenu.render();

        overlay.addEventListener('click', () => {
            onClickAway();
        });

        deleteButton.addEventListener('click', () => {
            onDeleteList();
        });

        editButton.addEventListener('click', () => {
            dom.prepend(editListMenuDOM);
        });

        moveButton.addEventListener('click', () => {
            dom.appendChild(moveListMenuDOM);
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <section class="list-menu">
                <div class="menu-buttons">
                    <button class="edit">Edit</button>
                    <button class="move">Move</button>
                    <button class="delete">Delete</button>
                </div>
                <div class="overlay"></div>
            </section>
        `;
    }
}

export default ListMenu;