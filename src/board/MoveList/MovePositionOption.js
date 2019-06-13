import Component from '../../Component.js';

class MovePositonOption extends Component {

    renderTemplate() {
        const position = this.props.position;
        const list = this.props.list;

        if(list.position === position) {
            return /*html*/ `
                <option selected value=${position}>${position}</option>
            `;
        }

        return /*html*/ `
            <option value=${position}>${position}</option>
        `;
    }
}

export default MovePositonOption;