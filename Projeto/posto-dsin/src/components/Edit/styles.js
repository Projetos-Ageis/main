import styled from 'styled-components'

export const ModalContainer = styled.main`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1001;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme["gray700"]};
  color: ${(props) => props.theme.white};
  width: 500px;
  height: 450px;
  padding: 10px;
  border-radius: 16px;
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    .conteudo {
        form{
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: center;

        }
        input {
            padding: 6px;
            border: none;
            border-radius: 6px;
            width: 200px;
        }
        button {
            margin-top: 15px;
            width: 200px;
            padding: 8px;
            border: none;
            border-radius: 6px;
            color: white;
            font-weight: bold;
            background-color: ${(props) => props.theme["yellow300"]};
            transition: 0.2s;
        }
        button:hover {
            background-color: ${(props) => props.theme["yellow500"]};
        }
    }
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


