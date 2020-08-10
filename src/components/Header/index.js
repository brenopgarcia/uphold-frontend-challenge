import React from 'react';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

function Header() {
  return (
    <Container>
      <header>
        <nav>
          <ul>
            <li>
              <a className="cool-after" href="/">
                Personal
              </a>
            </li>
            <li>
              <a className="cool-after" href="/">
                Business
              </a>
            </li>
            <li>
              <a className="cool-after" href="/">
                Partners
              </a>
            </li>
          </ul>
        </nav>
        <a href="/">
          <img src={Logo} alt="" />
        </a>
        <div className="buttons">
          <a href="/" id="logIn" className="cool-after">
            <span>Log in</span>
          </a>
          <a href="/" className="signUp">
            <span>Sign up</span>
          </a>
        </div>
      </header>
    </Container>
  );
};

export default Header;