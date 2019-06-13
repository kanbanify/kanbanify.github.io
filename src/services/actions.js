import { boardsRef, invitesRef } from '../services/firebase.js';

export function getBoardsFromKeys(boardKeys) {
    const promises = boardKeys.map(boardKey => {
        return boardsRef
            .child(boardKey.key)
            .once('value')
            .then(snapshot => snapshot.val());
    });
    return Promise.all(promises);
}

export function getInvitesFromKeys(invites) {
    const promises = invites.map(invite => {
        return invitesRef
            .child(invite.key)
            .once('value')
            .then(snapshot => snapshot.val());
    });
    return Promise.all(promises);
}