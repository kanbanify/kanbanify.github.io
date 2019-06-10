import './html-equal.js';
import { app } from '../src/services/firebase.js';
// // individual test files...
// import './whatever.test.js';
import './html-to-DOM.test.js';
import './html-equal.test.js';
QUnit.done(() => {
    app.delete();
}); 
