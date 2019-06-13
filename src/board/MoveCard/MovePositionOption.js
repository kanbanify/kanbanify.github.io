import Component from '../../Component.js';

class MovePositonOption extends Component {

    renderTemplate() {
        const card = this.props.card;
        const position = this.props.position;

        if(card.position === position) {
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