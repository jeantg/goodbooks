import styled from 'styled-components'

export const Container = styled.div`
  @media (min-width: 1023.9px) {
    min-width: 500px;
    margin: 32px;
  }
  .paper {
    margin: 0 20px;
    display: flex;

    background-color: #fff;
    flex-direction: column;
    max-height: 100%;
  }
  max-height: calc(100% - 64px);
  header {
    margin: 0;
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  footer {
    margin: 10px auto 0 0;
  }
  .content {
    overflow-y: auto;
  }
  svg {
    flex-shrink: 0;
    cursor: pointer;
  }
  img {
    width: 150px;
    margin-top: 20px;
    height: 150px;
  }
  .content-book {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 20px;
    h1 {
      font-size: 16px;
      font-weight: 500;
      margin-top: 10px;
    }
    a {
      text-decoration: none;
      margin-bottom: 10px;
      color: #606060;
      cursor: pointer;
    }
    h3 {
      font-size: 13px;
    }
    p,
    a,
    span {
      font-size: 10px;
    }
  }
  .description {
    overflow: auto;
  }

  .icons {
    font-size: 12px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
