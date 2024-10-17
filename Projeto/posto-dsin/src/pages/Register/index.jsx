import { BodyContainer,RegisterContainer,InputsContainer } from './styles'
import logoDsin from '../../assets/logoDsin.svg'

export function Register() {
    return(
        <RegisterContainer>
            <BodyContainer>
                <img src={logoDsin} alt="Logo Dsin" />
                <form action="">
                    <InputsContainer>
                        <p>Nome:</p>
                        <input type="text" />
                    </InputsContainer>
                    <InputsContainer>
                        <p>Email:</p>
                        <input type="text" />
                    </InputsContainer>
                    <InputsContainer>
                        <p>CNPJ:</p>
                        <input type="number" />
                    </InputsContainer>
                    <InputsContainer>
                        <p>Senha:</p>
                        <input type="text" />
                    </InputsContainer>
                    <button>CADASTRAR-SE</button>
                </form>
                <a href="/login">Já sou cliente</a>
            </BodyContainer>
        </RegisterContainer>
    )
}