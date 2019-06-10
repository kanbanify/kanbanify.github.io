const config = {
    apiKey: 'AIzaSyDnzMJu7YkT-TtTMbH0Tvk4vocdIb1IiQc',
    authDomain: 'kanbanify-c3d6f.firebaseapp.com',
    databaseURL: 'https://kanbanify-c3d6f.firebaseio.com',
    projectId: 'kanbanify-c3d6f',
    storageBucket: 'kanbanify-c3d6f.appspot.com',
    messagingSenderId: '800352696137',
    appId: '1:800352696137:web:2f64a37d3e2639bd'
};

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();

export const usersRef = db.ref('users');
export const boardsRef = db.ref('boards');
export const boardsByUserRef = db.ref('boardsByUser');
export const usersByBoardRef = db.ref('usersByBoard');
export const invitesByUserRef = db.ref('invitesByUser');
export const listsByBoardRef = db.ref('listsByBoard');
