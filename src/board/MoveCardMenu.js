import Component from '../Component.js';
import MoveListSelect from './MoveListSelect.js';
import MovePositionSelect from './MovePositonSelect.js';

class MoveCardMenu extends Component {

    render() {
        const dom = this.renderDOM();

        const card = this.props.card;
        const list = this.props.list;
        const lists = this.props.lists;
        const onMoveCard = this.props.onMoveCard;

        const movePositionSelect = new MovePositionSelect({ list, card, ogList: list });
        dom.prepend(movePositionSelect.render());

        const moveListSelect = new MoveListSelect({ 
            lists, 
            list,
            onListChange: (listKey) => {
                lists.forEach(childList => {
                    if(childList.key === listKey) {
                        movePositionSelect.update({ list: childList, card: {} });
                    }
                });
            }
        });
        dom.prepend(moveListSelect.render());

        dom.addEventListener('submit', event => {
            event.preventDefault();
            const fd = new FormData(dom);
            const targetPosition = fd.get('move-position-select');
            const targetList = fd.get('move-list-select');
            onMoveCard(targetList, targetPosition);
        });
        
        return dom;
    }
    
    renderTemplate() {
        return /*html*/ `
            <form class="move-card-menu">
                <button>Submit</button>
            </form>
        `;
    }
}

export default MoveCardMenu;