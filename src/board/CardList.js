import Component from '../Component.js';
import Card from './Card.js';

class CardList extends Component {

    render() {
        const dom = this.renderDOM();

        const cards = this.props.cards;
        const list = this.props.list;
        const lists = this.props.lists;
        const onCardMenuClick = this.props.onCardMenuClick;

        if(!cards) {
            return dom;
        }

        console.log(cards);

        cards.forEach(childCard => {
            const card = new Card({ cardData: childCard, list, lists, onCardMenuClick });
            dom.appendChild(card.render());
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="card-list"></ul>
        `;
    }
}

export default CardList;