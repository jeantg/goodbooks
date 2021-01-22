import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  cursor: pointer;
  width: 200px;
  -webkit-tap-highlight-color: transparent;
  margin: 10px 10px;
  box-shadow: 0 6px 11px 0 rgba(0, 0, 0, 0.12), 0 6px 11px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
  text-align: center;
  transition: visibility 0s 500ms, opacity 500ms linear;
  img {
    height: 150px;
    width: 100%;
  }
  * {
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
  }
  h2 {
    font-size: 12px;
    line-height: normal;
    letter-spacing: 0.5px;
    color: #000;
    margin: 24px 10px 10px 10px;
  }
  .ellipsis {
    overflow: hidden;
    word-break: break-all;
    position: relative;
    max-height: calc(var(--lh) * var(3));
  }
  .overflow {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (min-width: 513px) {
    height: 350px;
    width: auto;
    h2 {
      font-size: 14px;
      margin-top: 16px;
    }
    img {
      height: 280px;
    }
  }
  @media (max-width: 459px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0;
    margin-bottom: 2px;
    align-items: center;
    h2 {
      font-size: 20px;
      text-align: start;
    }
    img {
      width: 100px;
      height: 200px;
    }
    .overflow {
      white-space: normal;
    }
  }
`
