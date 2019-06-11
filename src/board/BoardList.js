import Component from '../Component.js';
import AddCard from './AddCard.js';
import Card from './Card.js';

import { cardsByListRef, listsByBoardRef } from '../services/firebase.js';

class BoardList extends Component {

    render() {
        const dom = this.renderDOM();
        
        const cardList = dom.querySelector('ul');
        const listSection = dom.querySelector('.list-section');

        const list = this.props.list;
        const board = this.props.board;

        if(!list) {
            return dom;
        }

        const addCard = new AddCard({
            onAddCard: content => {
                const cardRef = cardsByListRef.child(list.key).push();
                cardRef.set({
                    key: cardRef.key,
                    content,
                    position: list.cardCount + 1
                });
                listsByBoardRef
                    .child(board.key)
                    .child(list.key)
                    .update({ cardCount: list.cardCount + 1 });
            }
        });

        cardsByListRef
            .child(list.key)
            .orderByChild('position')
            .on('value', snapshot => {
                const cards = [];
                snapshot.forEach(child => {
                    cards.push(child.val());
                });
                cards.forEach(cardData => {
                    const card = new Card({ cardData });
                    cardList.appendChild(card.render());
                });
            });

        listSection.appendChild(addCard.render());

        return dom;
    }

    renderTemplate() {
        const list = this.props.list;
        return /*html*/`
            <li class="board-list">
                <section class="list-section">
                    <h2 class="list-title">${list.name}</h2>
                    <ul></ul>
                </section>
            </li>
        `;
    }
}

export default BoardList;