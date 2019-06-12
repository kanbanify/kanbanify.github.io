import Component from '../Component.js';

class MoveCardMenu extends Component {
    renderTemplate() {
        return /*html*/ `
            <form class="move-card-menu">
                <button>Move</button>
            </form>
        `;
    }
}

export default MoveCardMenu;