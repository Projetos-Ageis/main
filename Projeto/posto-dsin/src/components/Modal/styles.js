import styled from 'styled-components'

export const ModalContainer = styled.main`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1001;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme["gray700"]};
  color: ${(props) => props.theme.white};
  width: 800px;
  height: 530px;
  padding: 10px;
  border-radius: 16px;
  .container {
    display: flex;
    justify-content: center;
    gap: 40px;
  }
  .maps {
    width: 400px;
    height: 300px;
    margin-top: 50px;
    margin-right: 20px;
  }
  .buttonBack {
    display: flex;
    align-items: center;
    margin-top: 10px;
    gap: 5px;
    background-color: transparent;
    color: ${(props) => props.theme.white};
    border: none;
    transition: 0.2s;
  }
  .buttonBack:hover {
    color: ${(props) => props.theme["gray200"]};
  }
  .icon {
    width: 48px;
    height: 36px;
  }
`
export const PricesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 30px;

  .type {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #C4C4CC;
    font-weight: 400;
    img {
      width: 28px;
      height: 28px;
    }
  }
  h2 {
    span {
      margin-right: 6px;
    }
  }
  .down {
    color: ${(props) => props.theme.yellow};
  }
  .up {
    color: ${(props) => props.theme.yellow};
  }
`
export const InformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  align-items: center;
  .flag {
    width: 200px;
    height: 200px;
  }
  button {
    display: flex;
    align-items: center;
    background: #4c5357;
    color: white;
    border: none;
    margin-top: 20px;
    border-radius: 12px;
    width: 110px;
    height: 40px;
    transition: 0.2s;
  }
  button:hover {
    background-color: #797d7f;
  }
  h1 {
    font-size: 35px;
    text-align: center;

  }
  p {
    margin-top: 8px;
    margin-bottom: 8px;
    text-align: center;
  }
`

