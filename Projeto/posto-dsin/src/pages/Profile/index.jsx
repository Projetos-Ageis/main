import { BodyContainer,RegisterGasContainer,InputsContainer } from './styles'
import { HeaderComp } from '../../components/Header';
import logoDsin from '../../assets/logoDsin.svg'

export function Profile() {
    return(
        <RegisterGasContainer>
            <header>
                <div style={{display: "flex", alignItems: "center", gap: '15px'}}>
                    <div className='details'>
                        <p className='h2'>Bem Vindo,</p>
                        <a> UserName!</a>
                    </div>
                </div>
            </header>
            <BodyContainer>
                <img src={logoDsin} alt="Logo Dsin" />
                <h1> CADASTRAR POSTO </h1>
                <form action="">
                    <InputsContainer>
                        <p>Nome do posto:</p>
                        <input type="text" placeholder='Nome do posto'/>
                    </InputsContainer>
                    <InputsContainer>
                        <p>Endereço:</p>
                        <input type="text" placeholder='Endereço' />
                    </InputsContainer>
                    <InputsContainer>
                        <p>CNPJ:</p>
                        <input type="number" placeholder='CNPJ'/>
                    </InputsContainer>
                    <InputsContainer>
                        <p>Telefone de contato:</p>
                        <input type="text" placeholder='Telefone de contato'/>
                    </InputsContainer>
                    <InputsContainer>
                        <p>Horário de funcionamento:</p>
                        <input type="text" placeholder='Horário de funcionamento'/>
                    </InputsContainer>
                    <InputsContainer>
                        <p>Preço Diesel:</p>
                        <input type="number" placeholder='Diesel'/>
                    </InputsContainer>
                    <InputsContainer>
                        <p>Preço Gasolina:</p>
                        <input type="number" placeholder='Gasolina'/>
                    </InputsContainer>
                    <InputsContainer>
                        <p>Preço Etanol:</p>
                        <input type="number" placeholder='Etanol'/>
                    </InputsContainer>
                    <button>CADASTRAR POSTO</button>
                </form>
            </BodyContainer>
        </RegisterGasContainer>
    )
}