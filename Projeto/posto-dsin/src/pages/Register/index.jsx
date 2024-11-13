import { BodyContainer, RegisterContainer, InputsContainer } from "./styles";
import logoDsin from "../../assets/logoDsin.svg";
import { useState, useEffect } from "react";
import { RegisterAPI } from './actions';
import { useNavigate } from "react-router-dom";

export function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cnpj, setCNPJ] = useState("");
  const [senha, setSenha] = useState("");
  const telefone = "14996953001"
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    try {
      const response = await RegisterAPI(nome,cnpj,email, senha,telefone);
      console.log(response)

      navigate('/');
    } catch (error) {
      console.error('Erro ao tentar Registrar:', error);
    }
  };
  return (
    <RegisterContainer>
      <BodyContainer>
        <img src={logoDsin} alt="Logo Dsin" />
        <form onSubmit={register}>
          <InputsContainer>
            <p>Nome:</p>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </InputsContainer>
          <InputsContainer>
            <p>Email:</p>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputsContainer>
          <InputsContainer>
            <p>CNPJ:</p>
            <input
              type="number"
              placeholder="CNPJ"
              value={cnpj}
              onChange={(e) => setCNPJ(e.target.value)}
            />
          </InputsContainer>
          <InputsContainer>
            <p>Senha:</p>
            <input
              type="text"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </InputsContainer>
          <button>CADASTRAR-SE</button>
        </form>
        <a href="/">Já sou cliente</a>
      </BodyContainer>
    </RegisterContainer>
  );
}
