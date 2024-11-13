import styled from 'styled-components'

export const HeaderContainer = styled.main`
  background-color: ${(props) => props.theme["gray700"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 30px;
  height: 80px;
  a {
    text-decoration: none;
  }
  .logo{
    margin-top: 30px;
    width: 200px;
    height: 200px;
  }
  input {
    width: 450px;
    height: 50px;
    padding: 7px;
    border: none;
    border-radius: 7px;
    background-color: ${(props) => props.theme["gray200"]};
  }
  .details {
    color: ${(props) => props.theme.white};
    .h2{
        color: ${(props) => props.theme["gray200"]};
    }
  }
  .user {
    width: 54px;
    height: 54px;
  }
  a{
    color: ${(props) => props.theme["yellow300"]};
  }
`