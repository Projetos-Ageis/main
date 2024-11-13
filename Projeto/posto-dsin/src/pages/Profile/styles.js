import styled from 'styled-components';

export const RegisterGasContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 50px;
    background-color: ${(props) => props.theme["gray200"]};

    .h2 {
        color: ${(props) => props.theme["gray700"]};
        font-size: 30px;
    }
    
    a {
        color: ${(props) => props.theme["yellow500"]};
        font-size: 28px; 
    }
`;

export const BodyContainer = styled.div`
    background-color: ${(props) => props.theme["gray700"]};
    border-radius: 12px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 750px;
    height: 1000px;

    h1{
        color: ${(props) => props.theme["yellow500"]};
        margin: 15px;
    }

    img {
        width: 370px;
        margin-top: 29px;
        margin-bottom: -15px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    button {
        width: 400px;
        height: 50px;
        margin-top: 10px;
        background-color: #E5AB06;
        color: ${(props) => props.theme.white};
        border-radius: 7px;
        transition: 0.2s;
        border: none;
        font-size: 18px;
    }

    button:hover {
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
`;

export const InputsContainer = styled.div`
    input {
        width: 400px;
        height: 40px;
        padding: 7px;
        border: none;
        background-color: ${(props) => props.theme["gray200"]};
        border-radius: 5px;
        font-size: 16px; 
    }

    p {
        color: ${(props) => props.theme.white};
        margin-bottom: 6px;
        font-size:18px;
    }
`;