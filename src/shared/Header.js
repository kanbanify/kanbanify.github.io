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
                <a href="index.html">
                    <img id="logo" src="./assets/kanbanify logo.png"></a>
                <ul class="nav">
                    <a href="./index.html">
                        <li class="home">home</li>
                    </a>
                    <a href="./invites.html">
                        <li class="invites">
                            invitations
                            <img class="invites-envelope" src='/assets/envelope.png'>
                            <div class="invites-count">
                                <p>1</p>
                            </div>
                        </li>
                    </a>
                    <a href="./about.html">
                        <li class="about">about us</li>
                    </a>
                </ul>
            </header>
        `;
    }
}

export default Header;