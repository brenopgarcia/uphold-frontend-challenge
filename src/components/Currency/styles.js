import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .card {
    width: 100%;
    display: grid;
    grid-template-columns: 55% 35% 5%;
    padding-top: 12px;
    color:  #68778d;

    img {
      height: 24px;
      width: 24px;
      /* padding-left: 32px; */
    }

    h3{
      /* padding-right: 16px; */
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      white-space: nowrap;
      font-size: 18px;
    }

    .value {
      flex-direction: flex-start;
      text-align: left;
      padding-left:12px;
      font-size: 18px;
      max-width: 160px;
      overflow: auto;
      span {
      font-size: 18px;
    }
  }
  }
`;
