import Component from '../Component.js';

class CardMenu extends Component {

    render() {
        const dom = this.renderDOM();

        const overlay = dom.querySelector('.overlay');

        const onClickAway = this.props.onClickAway;

        overlay.addEventListener('click', () => {
            onClickAway();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <section class="card-menu">
                <button class="edit">Edit</button>
                <button class="move">Move</button>
                <button class="delete">Delete</button>
                <div class="overlay"></div>
            </section>
        `;
    }
}

export default CardMenu;