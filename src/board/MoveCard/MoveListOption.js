import Component from '../../Component.js';

class MoveListOption extends Component {
    renderTemplate() {
        const list = this.props.list;
        const currentList = this.props.currentList;

        if(list.key === currentList.key) {
            return /*html*/ `
                <option selected value="${list.key}">
                    ${list.name}
                </option>
            `;
        }

        return /*html*/ `
            <option value="${list.key}">
                ${list.name}
            </option>
        `;
    }
}

export default MoveListOption;