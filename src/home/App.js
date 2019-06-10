import Component from '../Component.js';
import Header from '../shared/Header.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        
        const header = new Header({ title: 'Home' });

        dom.prepend(header.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>Home Page</main>
            </div>
        `;
    }
}

export default App;