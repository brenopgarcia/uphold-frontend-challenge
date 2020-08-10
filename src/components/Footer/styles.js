import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  .main-footer {
    width: 80%;
  }

  .footer-details {
    display: grid;
    grid-template-columns: auto auto;
    padding-bottom: 50px;
    align-items: center;

    .uphold-qrcode {
      text-align: right;
    }

    .uphold-details {
      font-size: 11px;
      font-weight: 500;
      color: #68788d;

      div {
        height: 24px;
      }

      p {
        height: 24px;
      }

      ul {
        display: flex;
        flex: 1;
        li {
          margin-right: 24px;
          a {
            border-bottom: 1px solid #d8f3db;
            padding-bottom: 3px;

            &:hover {
              border-bottom-color: #65d27b;
            }
          }
        }
      }
    }
  }

  .footer {
    border-top: 1px solid #e4eaf2;
    padding-top: 60px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 30px;
    justify-content: space-between;
    margin-block-start: 2.33em;
    padding-bottom: 60px;

    ul li {
      padding: 6px 0;
    }

    .uphold-footer-logo img {
      height: 40px;
      width: 85px;
    }

    h6 {
      color: #3c4a5b;
      margin-block-end: 2.33em;
      font-size: 16px;
    }

    .apps {
      flex-direction: row;
      text-align: right;
      a {
        padding: 0 16px;

        & img {
          transition: transform 0.5s;
          &:hover {
            transform: scale(1.25);
          }
        }
      }

      .languages {
        /* padding-right: 16px */
        color: #7c8b9c;
        font-weight: 500;
        width: 120px;
        font-size: 12px;
        margin-top: 8px;
        padding: 4px 16px 4px 0px;
        border-color: #e4eaf2;
      }
    }
  }
`;
