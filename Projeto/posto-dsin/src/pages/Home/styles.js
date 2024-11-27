import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  margin: 100px auto;
`;
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