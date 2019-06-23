import Component from '../Component.js';

class AddBoard extends Component {

    render() {
        const dom = this.renderDOM();

        const onAddBoard = this.props.onAddBoard;

        const input = dom.querySelector('input');

        dom.addEventListener('submit', event => {
            event.preventDefault();

            if(input.value.trim() === '') {
                alert('Please add a title for your board.');
                return;
            }

            onAddBoard(input.value);
            dom.reset();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <form class="new-board">
                <h2>Add a new board</h2>
                <input placeholder="Enter board title...">
                <button>Submit</button>
            </form>
        `;
    }
}

export default AddBoard;