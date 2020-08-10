import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  text-align: center;
  padding-top: 48px;

  .main {
    width: 360px;

    .title {
      padding-top: 80px;
    }

    .results {
      min-height: 310px;
      max-height: 310px;
      overflow: auto;
    }
  }

  .input-rates {
    padding-bottom: 4px;

    input {
      border-style: hidden;
      background-color: #f5f9fc;
      width: 360px;
      padding: 4px 16px;
      color: #68778d;
      font-size: 28px;
      border-radius: 8px;
    }

    select {
      position: relative;
      border-style: hidden;
      width: 100px;
      top: -40px;
      padding: 8px;
      border-radius: 20px;
      transform: translateX(120px);
    }
  }

  h1 {
    font-weight: 600;
    padding-bottom: 24px;
  }

  h4,
  small {
    color: #6c7c91;
    padding-bottom: 42px;
  }

  .rates-detail {
    height: 310px;
  }
`;
