import '../utils/check-auth.js';
import InvitesApp from './InvitesApp.js';
import { auth } from '../services/firebase.js';

const root = document.getElementById('app');

auth.onAuthStateChanged((user) => {
    if(user) {
        const app = new InvitesApp();
        root.appendChild(app.render());
    }
});