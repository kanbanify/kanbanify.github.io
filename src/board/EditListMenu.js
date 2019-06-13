import Component from '../Component.js';

class EditListMenu extends Component {

    render() {
        const dom = this.renderDOM();

        const onEditList = this.props.onEditList;

        const form = dom.querySelector('form');

        const textarea = dom.querySelector('textarea');

        form.addEventListener('submit', event => {
            event.preventDefault();

            onEditList(textarea.value);

            form.reset();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <section class="edit-list-menu">
                <form class="edit-list-form">
                    <textarea></textarea>
                    <button>submit</button>
                </form>
            </section>
        `;
    }
}

export default EditListMenu;