import styled from 'styled-components'

export const LoginContainer = styled.main`
    display: flex;
    justify-content: center;
    padding: 50px;
`
export const BodyContainer = styled.div`
    background-color: ${(props) => props.theme["gray700"]};
    border-radius: 12px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 600px;
    height: 620px;
    img {
        width: 400px;
        margin-top: 55px;
        margin-bottom: -15px;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
    }
    button{
        width: 400px;
        height: 50px;
        margin-top: 28px;
        background-color: #E5AB06;
        color: ${(props) => props.theme.white};
        border-radius: 7px;
        transition: 0.2s;
        border: none;
    }
    button:hover{
        background-color: ${(props) => props.theme["yellow500"]}; 
    }
    a {
        color: #E5AB06;
        text-decoration: none;
        transition: 0.2s;
    }
    a:hover {
        color: ${(props) => props.theme["yellow500"]};
    }
`
export const InputsContainer = styled.div`
    input {
        width: 400px;
        height: 50px;
        padding: 7px;
        border: none;
        background-color: ${(props) => props.theme["gray200"]};
        border-radius: 5px;
    }
    p {
        color: ${(props) => props.theme.white};
        margin-bottom: 6px;
    }

`