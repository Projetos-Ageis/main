import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { BodyContainer, LoginContainer, InputsContainer } from './styles';
import logoDsin from '../../assets/logoDsin.svg';
import { GetOdata } from './actions';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loginResponse, setLoginResponse] = useState(null);
  const navigate = useNavigate(); 

  const login = async (e) => {
    e.preventDefault(); 

    try {
      const response = await GetOdata(email, senha);
      setLoginResponse(response);

      if (response.token) {
        localStorage.setItem('authToken', response.token);
        console.log('Token armazenado com sucesso:', response.token);
        toast.success('Login realizado com sucesso!');
        navigate('/home');
      } else {
        console.log('Token não encontrado na resposta');
        toast.error('Erro ao fazer login. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao tentar logar:', error);
      toast.error('Erro ao tentar logar. Verifique suas credenciais.');
    }
  };

  return (
    <LoginContainer>
      <BodyContainer>
        <img src={logoDsin} alt="Logo Dsin" />
        <form onSubmit={login}>
          <InputsContainer>
            <p>Email:</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputsContainer>
          <InputsContainer>
            <p>Senha:</p>
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </InputsContainer>
          <button type="submit">LOGAR</button>
        </form>
        <a href="/register">Cadastrar-se</a>
      </BodyContainer>
    </LoginContainer>
  );
}
