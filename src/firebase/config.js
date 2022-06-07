import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: 'AIzaSyARCRnBv1gTbaDFoQoGxGMJLIHHbVy_3jI',
        authDomain: 'admin-template-udemy.firebaseapp.com',
        projectId: 'admin-template-udemy',
    })
}

export default firebase