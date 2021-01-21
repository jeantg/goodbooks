import styled from 'styled-components'

export const Container = styled.div`
  ul {
    display: grid;
    grid-template-columns: auto auto;
    justify-items: center;
    gap: 10px;
    @media (max-width: 459px) {
      justify-items: center;
      grid-template-columns: auto;
    }
    @media (min-width: 513px) {
      --auto-grid-min-size: 16rem;
      justify-items: normal;
      grid-template-columns: repeat(
        auto-fill,
        minmax(var(--auto-grid-min-size), 1fr)
      );
    }
  }
`
