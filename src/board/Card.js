import Component from '../Component.js';
import TripleDotButton from '../shared/TripleDotButton.js';
import CardMenu from './CardMenu.js';

class Card extends Component {

    render() {
        const dom = this.renderDOM();

        const onCardMenuClick = this.props.onCardMenuClick;

        const cardMenu = new CardMenu({
            onClickAway: () => {
                dom.removeChild(cardMenuDOM);
            }
        });
        const cardMenuDOM = cardMenu.render();
        
        const tripleDotButton = new TripleDotButton({ 
            onClick: () => {
                // dom.appendChild(cardMenuDOM);
                onCardMenuClick();
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