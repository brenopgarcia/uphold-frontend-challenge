import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-width: 900px;

  header {
    margin-top: 50px;
    padding: 0 70px;
    display: grid;
    grid-template-columns: 20% auto 20%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    height: 56px;
    width: 100%;

    nav {
      ul {
        display: flex;
        flex-direction: row;
        li {
          margin: 0 16px;
          a {
            color: #68778d;
          }
        }
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      span {
        font-size: 15px;
      }

      #logIn {
        min-width: 40px;
      }

      .signUp {
        background: #e4f7e7;
        color: #65d27b;
        border-radius: 20px;
        padding: 8px 20px;
        margin-left: 20px;
        min-width: 90px;

        &:hover {
          background: #d8f3db;
        }
      }
    }
  }
`;
