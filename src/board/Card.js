import Component from '../Component.js';
import TripleDotButton from '../shared/TripleDotButton.js';

class Card extends Component {

    render() {
        const dom = this.renderDOM();

        const onCardMenuClick = this.props.onCardMenuClick;
        const cardData = this.props.cardData;
        const list = this.props.list;
        
        const tripleDotButton = new TripleDotButton({ 
            onClick: () => {
                onCardMenuClick(cardData, list);
            }
        });
        
        const tripleDotButtonDOM = tripleDotButton.render();

        dom.appendChild(tripleDotButtonDOM);

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