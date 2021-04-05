import { firebaseAuth, GithubProvider, GoogleProvider } from './firebase';


class AuthService {
    login = (provider) => {
        switch (provider){
            case 'Google' :
                 return firebaseAuth.signInWithPopup(GoogleProvider)
            case 'Github' :
                 return firebaseAuth.signInWithPopup(GithubProvider)
            default :
                throw new Error(`undefined Provider:${provider}`)
        }        
    }

    logout = () => {
        firebaseAuth.signOut()
    }

    onAuthChanged = (myFunction) => {
        firebaseAuth.onAuthStateChanged(user => {
            myFunction(user)
        }
        )}

}

export default AuthService