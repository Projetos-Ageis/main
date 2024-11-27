import { useState, useEffect } from "react";
import { BodyContainer, RegisterGasContainer, InputsContainer } from "./styles";
import logoDsin from "../../assets/logoDsin.svg";
import { GetOdata, NovoPosto } from "./actions";
import { useNavigate } from 'react-router-dom'; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Profile() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cnpj, setCNPJ] = useState("");
  const [telefone, setTelefone] = useState("");
  const [horario, setHorario] = useState("");
  const [priceD, setPriceD] = useState();
  const [priceG, setPriceG] = useState();
  const [priceE, setPriceE] = useState();
  const navigate = useNavigate(); 

  const [userInformation, setUserInformation] = useState(null);

  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const response = await GetOdata();
        setUserInformation(response);
      } catch (error) {
        console.error("Erro ao tentar obter informações:", error);
      }
    };

    fetchUserInformation();
  }, []);

  const register = async (e) => {
    e.preventDefault();

    try {
      const response = await NovoPosto(
        cnpj,
        endereco,
        telefone,
        horario,
        nome,
        priceG,
        priceD,
        priceE
      );
      toast.success("Posto cadastrado com sucesso!");
      navigate("/mypostos");
    } catch (error) {
      console.error("Erro ao tentar registrar:", error);
    }
  };

  return (
    <RegisterGasContainer>
      <header>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div className="details">
            <p className="h2">Bem-vindo,</p>
            <p className="h2">
              {userInformation ? userInformation.nome : "Carregando..."}
            </p>
          </div>
        </div>
      </header>

      <BodyContainer>
        <img src={logoDsin} alt="Logo Dsin" />
        <h1> CADASTRAR POSTO </h1>

        <form onSubmit={register}>
          <InputsContainer>
            <p>Nome do posto:</p>
            <input
              type="text"
              placeholder="Nome do posto"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </InputsContainer>
          <InputsContainer>
            <p>Endereço:</p>
            <input
              type="text"
              placeholder="Endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </InputsContainer>
          <InputsContainer>
            <p>CNPJ:</p>
            <input
              type="text"
              placeholder="CNPJ"
              value={cnpj}
              onChange={(e) => setCNPJ(e.target.value)}
            />
          </InputsContainer>
          <InputsContainer>
            <p>Telefone de contato:</p>
            <input
              type="text"
              placeholder="Telefone de contato"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </InputsContainer>
          <InputsContainer>
            <p>Horário de funcionamento:</p>
            <input
              type="text"
              placeholder="Horário de funcionamento"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
            />
          </InputsContainer>
          <InputsContainer>
            <p>Preço Diesel:</p>
            <input
              type="number"
              step="0.01"
              placeholder="Diesel"
              value={priceD}
              onChange={(e) => setPriceD(e.target.value)}
            />
          </InputsContainer>
          <InputsContainer>
            <p>Preço Gasolina:</p>
            <input
              type="number"
              step="0.01"
              placeholder="Gasolina"
              value={priceG}
              onChange={(e) => setPriceG(e.target.value)}
            />
          </InputsContainer>
          <InputsContainer>
            <p>Preço Etanol:</p>
            <input
              type="number"
              step="0.01"
              placeholder="Etanol"
              value={priceE}
              onChange={(e) => setPriceE(e.target.value)}
            />
          </InputsContainer>
          <button type="submit">CADASTRAR POSTO</button>
        </form>
      </BodyContainer>
    </RegisterGasContainer>
  );
}
