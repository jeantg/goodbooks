import styled from 'styled-components'

export const Container = styled.div`
  .topNavBar {
    overflow: hidden;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
  .dropdown {
    display: block;
    float: left;
    overflow: hidden;
  }

  .dropdown .dropbtn {
    font-size: 17px;
    border: none;
    outline: none;
    color: white;
    padding: 12px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content span {
    float: none;
    color: black;
    cursor: pointer;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
`
