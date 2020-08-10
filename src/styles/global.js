import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
    line-height: 1.4;
  }

  body {
    -webkit-font-smoothing: antiliased;
  }

  body, input, button {
    font-family: proxima-nova, ProximaNova-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif, serif;
  }

  h1, h2, h3, h4, h5, h6, strong, a, span {
    font-weight: 500;
  }

  ul {
    list-style-type: none;
  }

  button {
    cursor: pointer;
  }

  a{
    color: rgb(104, 119, 141);
  }

  .cool-after::after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      background: rgb(104, 119, 141);
      transition: width 0.3s ease;
      -webkit-transition: width .3s ease;
    }

    .cool-after:hover::after {
      position: relative;
      width: 100%;
      color: rgb(104, 119, 141);
    }

`;
