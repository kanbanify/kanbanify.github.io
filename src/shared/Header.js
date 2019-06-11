import Component from '../Component.js';
import Profile from './Profile.js';

import { auth } from '../services/firebase.js';

class Header extends Component {

    render() {
        const dom = this.renderDOM();

        auth.onAuthStateChanged((user) => {
            const profile = new Profile({ user });
            dom.appendChild(profile.render());
        });

        return dom;
    }

    renderTemplate() {
        const title = this.props.title || document.title;

        return /*html*/`
            <header>
                <img class="logo" src="./assets/kanbanify logo.png">
                <h1>${title}</h1>
            </header>
        `;
    }
}

export default Header;