import Component from '../Component.js';
import Header from '../shared/Header.js';
import Board from './Board.js';
import CardMenu from './CardMenu.js';

import QUERY from '../utils/QUERY.js';

import { boardsRef, listsByBoardRef, cardsByListRef } from '../services/firebase.js';

class BoardApp extends Component {

    render() {
        const dom = this.renderDOM();

        const boardKey = QUERY.parse(window.location.search).key;

        const header = new Header();

        const board = new Board({});

        function onCardMenuClick(card, list, viewportOffset) {
            const cardMenu = new CardMenu({
                onClickAway: () => {
                    dom.removeChild(cardMenuDOM);
                },
                onDeleteCard: () => {
                    cardsByListRef
                        .child(list.key)
                        .orderByChild('position')
                        .once('value', snapshot => {
                            const cards = [];
                            snapshot.forEach(child => {
                                if(card.key !== child.val().key) {
                                    cards.push(child.val());
                                } else {
                                    cardsByListRef.child(list.key).child(card.key).remove();
                                }
                            });
                            cards.forEach((updatedCard, i) => {
                                cardsByListRef.child(list.key).child(updatedCard.key).update({
                                    position: i + 1
                                });
                            });
                            board.update();
                        });
                }
            });

            const cardMenuDOM = cardMenu.render();

            const menuButtons = cardMenuDOM.querySelector('.menu-buttons');

            menuButtons.style.left = viewportOffset.x + 10 + viewportOffset.width + 'px';
            menuButtons.style.top = viewportOffset.y + 'px';
            
            dom.appendChild(cardMenuDOM);
        }

        boardsRef.child(boardKey).on('value', snapshot => {
            const boardInfo = snapshot.val();
            listsByBoardRef.child(boardInfo.key).orderByChild('position').on('value', snapshot => {
                const lists = [];
                snapshot.forEach(child => {
                    lists.push(child.val());
                });
                board.update({ board: boardInfo, lists, onCardMenuClick });
            });

        });

        dom.prepend(header.render());
        dom.appendChild(board.render());
   
        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
            </div>
        `;
    }
}

export default BoardApp;