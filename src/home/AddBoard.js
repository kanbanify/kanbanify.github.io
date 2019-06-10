import Component from '../Component.js';

class AddBoard extends Component {

    render() {
        const dom = this.renderDOM();

        const onAddBoard = this.props.onAddBoard;

        const input = dom.querySelector('input');

        dom.addEventListener('submit', event => {
            event.preventDefault();

            onAddBoard(input.value);

            dom.reset();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <form>
                <input>
                <button>Submit</button>
            </form>
        `;
    }
}

export default AddBoard;