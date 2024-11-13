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
                        <input type="text" placeholder='Nome'/>
                    </InputsContainer>
                    <InputsContainer>
                        <p>Email:</p>
                        <input type="text" placeholder='Email' />
                    </InputsContainer>
                    <InputsContainer>
                        <p>CNPJ:</p>
                        <input type="number" placeholder='CNPJ'/>
                    </InputsContainer>
                    <InputsContainer>
                        <p>Senha:</p>
                        <input type="text" placeholder='Senha'/>
                    </InputsContainer>
                    <button>CADASTRAR-SE</button>
                </form>
                <a href="/login">Já sou cliente</a>
            </BodyContainer>
        </RegisterContainer>
    )
}