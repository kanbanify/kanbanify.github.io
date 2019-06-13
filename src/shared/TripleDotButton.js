import Component from '../Component.js';

class TripleDotButton extends Component {

    render() {
        const dom = this.renderDOM();

        const onClick = this.props.onClick;

        dom.addEventListener('click', () => {
            onClick();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <button class="menu-button">⋮</button>
        `;
    }
}

export default TripleDotButton;