import Component from '../Component.js';
import TripleDotButton from '../shared/TripleDotButton.js';

class Card extends Component {

    render() {
        const dom = this.renderDOM();

        const tripleDotButton = new TripleDotButton({
            onClick: () => {
                
            }
        });

        dom.appendChild(tripleDotButton.render());
        
        return dom;
    }

    renderTemplate() {
        const cardData = this.props.cardData;
        return /*html*/`
            <li class="card">
                <p>${cardData.content}</p>
            </li>
        `;
    }
}

export default Card;