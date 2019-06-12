import Component from '../Component.js';

class Header extends Component {

    render() {
        const dom = this.renderDOM();

        const onClickAway = this.props.onClickAway;

        const overlay = dom.querySelector('.overlay');

        overlay.addEventListener('click', () => {
            onClickAway();
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

export default Header;