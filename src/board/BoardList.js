import Component from '../Component.js';
import AddCard from './AddCard.js';

import { cardsByListRef, listsByBoardRef } from '../services/firebase.js';

class BoardList extends Component {

    render() {
        const dom = this.renderDOM();

        const list = this.props.list;
        const board = this.props.board;

        if(!list) {
            return dom;
        }

        const addCard = new AddCard({
            onAddCard: content => {
                const cardRef = cardsByListRef.push();
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

        dom.appendChild(addCard.render());

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