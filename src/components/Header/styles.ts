import styled from 'styled-components'

export const Container = styled.div`
  background-color: #00c2ff;
  text-align: center;
  justify-content: center;
  padding: 20px;
  header {
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
    grid-row-gap: 20px;
    input {
      width: calc(100% - 40px);
    }
  }
  h1 {
    font-size: 35px;
    color: #fff;

    font-family: 'Fredoka One';
  }

  @media (min-width: 1023.9px) {
    header {
      input {
        width: 50%;
      }
    }
  }
  input {
    height: 35px;
    border-radius: 20px;
    border: none;
    text-indent: 20px;
    outline-style: none;
    align-items: center;
    display: flex;
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);
    ::placeholder {
      color: #868686;
      font-size: 12px;
      @media (min-width: 1023.9px) {
        font-size: 15px;
      }
    }
  }
`
