import Component from '../Component.js';

class AddCard extends Component {

    render() {
        const dom = this.renderDOM();
        const form = dom.querySelector('form');
        const textArea = dom.querySelector('textArea');

        const onAddCard = this.props.onAddCard;

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            if(textArea.value.trim() === '') {
                alert('Please add content to your card.');
            } else {
                onAddCard(textArea.value);
            }
            form.reset();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <li class="add-card">
                <form>
                    <textarea placeholder="Add card content..."></textarea>
                    <button>Add card</button>
                </form>
            </li>
        `;
    }
}

export default AddCard;