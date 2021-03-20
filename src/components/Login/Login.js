import React, { useContext } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fab,faFacebook,faGooglePlus} from "@fortawesome/free-brands-svg-icons";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from '../../App';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const handleGoogleSignIn = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {

                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email };
                setLoggedInUser(signedInUser);

            })
            .catch((error) => {

                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

            });

    }
    return (
        <div>
            <div className="login">
                <h2>LOG IN</h2>
                <form>
                    <div className="login-input-field">
                        <input type="text" name="email" placeholder="Enter Email Address" required />

                    </div>
                    <div className="login-input-field">
                        <input type="password" name="password" placeholder="Enter Password" required />
                    </div>
                </form>
                <div className="button">
                    <input type="submit" value="Log In" />
                </div>
                <hr />
                <div>
                    <h6 className="or" style={{ textAlign: "center" }}>OR</h6>
                    <div>
                        <button onClick={handleGoogleSignIn} className="anotherLoginBtn forClr1"> <FontAwesomeIcon style={{fontSize:"25px"}} className="mr-5" icon={faGooglePlus} />Continue With Google</button>

                        <button className="anotherLoginBtn forClr2 mt-3"><FontAwesomeIcon style={{fontSize:"25px"}} className="mr-5" icon={faFacebook} />Continue With Facebook</button>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Login;
