import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  max-height: 300px;
  width: 100%;

  svg {
    margin: 5px 5px 5px auto;
    flex-shrink: 0;
    cursor: pointer;
  }
  img {
    width: 120px;
  }
  .content-book {
    width: 100%;
    flex-direction: column;
    margin: 10px 10px;
    h1 {
      font-size: 16px;
      font-weight: 500;
    }
    a {
      text-decoration: none;
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
      margin-top: 12px;
    }
  }
  .favorite-icon {
    margin: auto auto;
  }
  .description {
    margin-top: 20px;
    overflow: auto;
  }
  @media (min-width: 1023.9px) {
    width: 800px;
    min-height: 500px;

    .content-book {
      width: 100%;
      flex-direction: column;
      margin: 10px 20px;
      h1 {
        font-size: 26px;
      }
      h3 {
        font-size: 16px;
      }
      p,
      a,
      span {
        font-size: 12px;
        margin-top: 12px;
      }
      .description {
        width: 100%;
        margin-top: 20px;
        overflow: auto;
      }
    }
    img {
      width: 300px;
    }
  }
  .icons {
    margin-top: auto;
    font-size: 12px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
