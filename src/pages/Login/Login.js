import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from '../../imagesAll/images/aircncLogo.png';
import googleLogo from '../../imagesAll/images/google.png';
import './Login.css';
import loginPhoto from '../../imagesAll/images/aircncLogin.png';
import firebase from "firebase/app";
import firebaseConfig from "./firebase.config";
import "firebase/auth";
import { UserContext } from '../../App';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  // var [user, setUser] = useState({
  //   name: '',
  //   email: ''
  // });

  if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          const { displayName, email } = result.user;
          const signedInUser = { 
            name: displayName, 
            email:email,
           };

          setLoggedInUser(signedInUser);
          storeAuthToken();
        })
        .catch(function (error) {
          // Handle Errors here.
        });
    };

const storeAuthToken = () => {
  firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    .then(function (idToken) {

      //now store the token in session storage
      sessionStorage.setItem('token', idToken);
      history.replace(from);
    }).catch(function (error) {
      // Handle error
    });
}

    return (
        <div>

            <div className="row">

                <div className="col-md-6">

                    <div>
                        <Link to="/">
                            <img src={logo} alt='logo' className='logoSize ' />
                        </Link>
                    </div>

                    <div className='loginBox' >
                        <h2> Login With</h2>
                        <div className='googleBox' onClick={handleGoogleSignIn}>
                            <img src={googleLogo} alt='googleLogo' className='googleLogo' />
                            <span className='writing'>Continue with Google</span>
                        </div>
                    </div>

                </div>


                <div className='col-md-6'>
                    <div style={{height:'100%'}}>
                        <img src={loginPhoto} alt="loginPhoto" style={{maxWidth: '100%',maxHeight: '100vh',margin: 'auto'}}/>
                    </div>
                </div>


            </div>



        </div>
    );
};

export default Login;