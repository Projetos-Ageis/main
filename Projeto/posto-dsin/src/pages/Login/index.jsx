import { BodyContainer,LoginContainer,InputsContainer } from './styles'
import logoDsin from '../../assets/logoDsin.svg'

export function Login() {
    return(
        <LoginContainer>
            <BodyContainer>
                <img src={logoDsin} alt="Logo Dsin" />
                <form action="">
                    <InputsContainer>
                        <p>Email:</p>
                        <input type="text" placeholder='Email' />
                    </InputsContainer>
                    <InputsContainer>
                        <p>Senha:</p>
                        <input type="text" placeholder='Senha'/>
                    </InputsContainer>
                    <button>LOGAR</button>
                </form>
                <a href="/register">Cadastrar-se</a>
            </BodyContainer>
        </LoginContainer>
    )
}