import { firebaseDatabase } from './firebase';


class Database {
    syncData = (userId, updateFunc) => {
        const ref = firebaseDatabase.ref(`${userId}/cards`);
        ref.on('value', snapshot => {
            const value = snapshot.val()
            value && updateFunc(value)
        })
        return () => ref.off();
    }

    saveCard = (userId, card) => {
        firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card)
    }

    deleteCard = (userId, card) => {
        firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
    }

}


export default Database;