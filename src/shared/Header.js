import Component from '../Component.js';
import Profile from './Profile.js';

import { auth } from '../services/firebase.js';

class Header extends Component {

    render() {
        const dom = this.renderDOM();
        const home = dom.querySelector('.home');
        const invites = dom.querySelector('.invites');
        const about = dom.querySelector('.about');

        const title = this.props.title;

        title === 'Home' ? home.classList.add('current-page') : '';
        title === 'Board Invites' ? invites.classList.add('current-page') : '';
        title === 'About Us' ? about.classList.add('current-page') : '';

        auth.onAuthStateChanged((user) => {
            const profile = new Profile({ user });
            dom.appendChild(profile.render());
        });

        return dom;
    }

    renderTemplate() {

        return /*html*/`
            <header>
                <img class="logo" src="./assets/kanbanify logo.png">
                <ul class="nav">
                    <a href="./index.html">
                        <li class="home">Home</li>
                    </a>
                    <a href="./invites.html">
                        <li class="invites">Board Invites</li>
                    </a>
                    <a href="./index.html">
                        <li class="about">About Us</li>
                    </a>
                </ul>
            </header>
        `;
    }
}

export default Header;