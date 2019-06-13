import Component from '../Component.js';

class BoardsHeader extends Component {
    renderTemplate() {
        return /*html*/ `
            <section class="boards-header">
                <img src="../../assets/personal-boards.png">
                <h2>Personal Boards</h2>
            </section>
        `;
    }
}

export default BoardsHeader;