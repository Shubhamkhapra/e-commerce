import React from 'react';
import { Link } from 'react-router-dom';
import "./header.style.scss";
import CartIcon from '../car-icon/cart-icon';


const Header = () => {
    return (
        <nav className='nav-menu container'>
            <div className='logo'>
                <Link to='/'>
                    SK
                </Link>
            </div>
            <ul className='nav-links'>
                <li>
                    <Link to='/'>
                        HOME
                    </Link>
                </li>
                <li>
                    <Link to='/shop'>
                        SHOP
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        CONTACT
                    </Link>
                </li>
                <li>
                    <Link to='/signin'>
                        SIGN IN
                    </Link>
                </li>
            </ul>
            <CartIcon />
        </nav>
    )
}

export default Header;