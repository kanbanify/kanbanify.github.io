import Component from '../Component.js';
import EditCardMenu from './EditCardMenu.js';

class CardMenu extends Component {

    render() {
        const dom = this.renderDOM();

        const overlay = dom.querySelector('.overlay');
        const deleteButton = dom.querySelector('.delete');
        const editButton = dom.querySelector('.edit');

        const onClickAway = this.props.onClickAway;
        const onDeleteCard = this.props.onDeleteCard;
        const onEditCard = this.props.onEditCard;

        const viewportOffset = this.props.viewportOffset;
        const card = this.props.card;

        const editCardMenu = new EditCardMenu({ onEditCard });
        const editCardMenuDOM = editCardMenu.render();
        const editCardInput = editCardMenuDOM.querySelector('textarea');

        overlay.addEventListener('click', () => {
            onClickAway();
        });

        deleteButton.addEventListener('click', () => {
            onDeleteCard();
        });

        editButton.addEventListener('click', () => {
            editCardInput.value = card.content;
            editCardMenuDOM.style.width = viewportOffset.width + 6 + 'px';
            editCardMenuDOM.style.top = (viewportOffset.y - 3) + 'px';
            editCardMenuDOM.style.left = (viewportOffset.x - 3) + 'px';
            editCardInput.style.width = (viewportOffset.width - 6) + 'px';
            editCardInput.style.height = (viewportOffset.height - 6) + 'px';
            dom.prepend(editCardMenuDOM);
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <section class="card-menu">
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

export default CardMenu;