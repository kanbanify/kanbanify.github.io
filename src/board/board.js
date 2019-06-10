import '../utils/check-auth.js';
import BoardApp from './BoardApp.js';
import { auth } from '../services/firebase.js';

const root = document.getElementById('app');

auth.onAuthStateChanged(() => {
    const app = new BoardApp();
    root.appendChild(app.render());
});