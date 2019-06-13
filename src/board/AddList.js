import Component from '../Component.js';

class AddList extends Component {

    render() {
        const dom = this.renderDOM();
        const input = dom.querySelector('input');

        const onAddList = this.props.onAddList;

        dom.addEventListener('submit', event => {
            event.preventDefault();

            if(input.value.trim() === '') {
                alert('please give a title to your list.');
            } else {
                onAddList(input.value);
            }
            dom.reset();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <form class="add-list">
                <input>
                <button>Add List</button>
            </form>
        `;
    }
}

export default AddList;