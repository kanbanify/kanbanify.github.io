import Component from '../Component.js';

class ModalOverlay extends Component {

    render() {
        const dom = this.renderDOM();

        const onClickAway = this.props.onClickAway;

        dom.addEventListener('click', () => {
            onClickAway();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div class="overlay"></div>
        `;
    }
}

export default ModalOverlay;