import Component from '../Component.js';

class Card extends Component {

    renderTemplate() {
        const cardData = this.props.cardData;
        return /*html*/`
            <li>
                <p>${cardData.content}</p>
            </li>
        `;
    }
}

export default Card;