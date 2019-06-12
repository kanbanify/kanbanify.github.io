import Component from '../Component.js';
import Header from '../shared/Header.js';

import { auth, usersRef } from '../services/firebase.js';

const ui = new firebaseui.auth.AuthUI(auth);

class AuthApp extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header({ title: 'Sign In' });

        dom.prepend(header.render());

        ui.start('#firebaseui-auth-container', {
            callbacks: {
                signInSuccessWithAuthResult: (res) => {
                    const userRef = usersRef.child(res.user.uid);
                    userRef.set({
                        uid: res.user.uid,
                        displayName: res.user.displayName,
                        email: res.user.email,
                        photoURL: res.user.photoURL
                    })
                        .then(() => {
                            window.location = './';
                        });
                }
            },
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ],
            signInSuccessUrl: './',
            credentialHelper: firebaseui.auth.CredentialHelper.NONE
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                    <div id="firebaseui-auth-container"></div>
                </main>
            </div>
        `;
    }
}

export default AuthApp;