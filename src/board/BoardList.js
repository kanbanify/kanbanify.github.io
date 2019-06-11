import Component from '../Component.js';

class BoardList extends Component {

    render() {
        const dom = this.renderDOM();

        const list = this.props.list;

        if(!list) {
            return dom;
        }

        return dom;
    }

    renderTemplate() {
        const list = this.props.list;
        return /*html*/`
            <li>
                <h2>${list.name}</h2>
                <ul></ul>
            </li>
        `;
    }
}

export default BoardList;