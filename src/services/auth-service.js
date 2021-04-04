import { firebaseAuth, GithubProvider, GoogleProvider } from './firebase';


class AuthService {
    login = (provider) => {
        switch (provider){
            case 'Google' :
                firebaseAuth.signInWithPopup(GoogleProvider)
                break;
            case 'Github' :
                firebaseAuth.signInWithPopup(GithubProvider)
                break;
            default :
                throw new Error(`undefined Provider:${provider}`)
        }        
    }

    
    logout = () => {
        firebaseAuth.signOut()
    }

    // 로그인 감지?

}

export default AuthService