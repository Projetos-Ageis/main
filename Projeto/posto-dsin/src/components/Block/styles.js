import styled from 'styled-components'

export const BlockContainer = styled.div`
  width: 400px;
  background-color: #3C4448;
  color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding-bottom: 20px;
  cursor: pointer;
  .bandeira{
    width: 400px;
  }
  .prices {
    display: flex;
    gap: 50px;
    font-size: 18px;
  }
  .price {
    display: flex;
    flex-direction: column;
    gap: 3px;
    .down {
    color: ${(props) => props.theme.white};
  }
  .up {
    color: ${(props) => props.theme.white};
  }
  span {
    color: #C4C4CC;
  }
  }
`

