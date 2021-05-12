import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imagesAll/images/aircncLogo.png';

const Login = () => {
    return (
        <div>
            <div>
            <Link to="/">
                <img src={logo} alt='logo' className='logoSize '/>
            </Link>
            </div>
        </div>
    );
};

export default Login;