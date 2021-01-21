import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  box-shadow: 0 6px 11px 0 rgba(0, 0, 0, 0.12), 0 6px 11px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
  text-align: center;
  flex-direction: row;
  width: 100%;
  margin: 10px;
  transition: visibility 0s 500ms, opacity 500ms linear;
  h1 {
    margin: 5px 20px;
    font-size: 12px;
  }
  img {
    height: 100px;
    width: 80px;
  }
`
