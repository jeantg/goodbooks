import styled from 'styled-components'

export const Container = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  gap: 10px;
  button {
    border: none;
    outline-style: none;
    list-style: none;
    background-color: transparent;
    font-size: 18px;
  }
  .page,
  svg {
    cursor: pointer;
  }
  .page {
    background-color: rgba(0, 0, 0, 0.08);
    height: 30px;
    align-items: center;
    font-size: 13px;
    justify-content: center;
    width: 30px;
    border-radius: 20px;
  }
  .active {
    background-color: #00c2ff;
    color: #fff;
  }
`
