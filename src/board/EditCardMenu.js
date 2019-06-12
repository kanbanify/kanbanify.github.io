import Component from '../Component.js';

class EditCardMenu extends Component {

    render() {
        const dom = this.renderDOM();

        const onEditCard = this.props.onEditCard;

        const form = dom.querySelector('form');

        const textarea = dom.querySelector('textarea');

        form.addEventListener('submit', event => {
            event.preventDefault();

            onEditCard(textarea.value);
            
            form.reset();
        });
        
        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <section class="edit-card-menu">
                <form class="edit-card-form">
                    <textarea></textarea>
                    <button>submit</button>
                </form>
            </section>
        `;
    }
}

export default EditCardMenu;