import * as firebase from 'firebase';


export class AuthService {

    signUpUsers(email: string, password: string) {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => console.log(error));
    }

    signInUsers(email: string, password: string) {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(token => console.log(token))
            .catch(error => console.log(error));
    }

}