import Component from '../Component.js';

class CardMenu extends Component {

    render() {
        const dom = this.renderDOM();

        const overlay = dom.querySelector('.overlay');
        const deleteButton = dom.querySelector('.delete');

        const onClickAway = this.props.onClickAway;
        const onDeleteCard = this.props.onDeleteCard;

        overlay.addEventListener('click', () => {
            onClickAway();
        });

        deleteButton.addEventListener('click', () => {
            onDeleteCard();
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