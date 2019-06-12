import Component from '../Component.js';
import MovePositionOption from './MovePositionOption.js';

class MovePositionSelect extends Component {

    render() {
        const dom = this.renderDOM();

        const list = this.props.list;
        const card = this.props.card;
        const ogList = this.props.ogList;

        console.log(list);

        for(let i = 1; i <= list.cardCount; i++) {
            const movePositionOption = new MovePositionOption({ position: i, card });
            dom.appendChild(movePositionOption.render());
        }

        if(list.key !== ogList.key) {
            const positionOption = new MovePositionOption({ position: list.cardCount + 1, card });
            dom.appendChild(positionOption.render());
        }
        
        return dom;
    }
    
    renderTemplate() {
        return /*html*/ `
            <select></select>
        `;
    }
}

export default MovePositionSelect;