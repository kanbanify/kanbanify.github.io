import Component from '../Component.js';

class BoardsHeader extends Component {
    renderTemplate() {
        const title = this.props.title;
        const imgLocation = this.props.image;

        return /*html*/ `
            <section class="boards-header">
                <img src="${imgLocation}">
                <h2>${title}</h2>
            </section>
        `;
    }
}

export default BoardsHeader;