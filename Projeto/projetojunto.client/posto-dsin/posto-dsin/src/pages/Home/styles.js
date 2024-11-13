import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 50px;
  .blocks {
    display: grid;
    padding-left: 60px;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px; 
  }
`