import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   position: fixed;
   top: 0;
   left: 0;
   height: 100vh;
   width: 100vw;
   overflow-y: auto;
   z-index: 101;
   background-color: rgba(0, 0, 0, 0.3);
`;
