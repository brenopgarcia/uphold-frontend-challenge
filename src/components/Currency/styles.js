import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .card {
    width: 100%;
    display: grid;
    grid-template-columns: auto 17% 5%;
    grid-column-gap: 5px;
    padding-top: 12px;
    color:  #68778d;

    img {
      height: 24px;
      width: 24px;
    }

    h3{
      padding-right: 16px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      white-space: nowrap;
    }

    .value {
      flex-direction: flex-start;
      text-align: left;
      padding-left:8px;
      font-size: 20px;
      max-width: 260px;
      overflow: auto;
      span {
      font-size: 24px;
      }
    }
  }

`;
