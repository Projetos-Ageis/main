import api from "../../api/api.js";

export const GetOdata = async () => {
  try {
    const response = await api.get("/DonoPosto/donoposto");
    return response.data;
  } catch (error) {
    console.error("Erro a puxar informação:", error);
    return { success: false, message: "Erro de login" };
  }
};
export const NovoPosto = async (
  cnpj,
  endereco,
  telefone,
  horaFuncionamento,
  bandeira,
  gasolina,
  diesel,
  etanol
) => {
  try {
    const response = await api.post("/DonoPosto/criarposto", {
      cnpj,
      endereco,
      telefone,
      horaFuncionamento,
      bandeira,
      gasolina,
      diesel,
      etanol,
    });
    return response.data;
  } catch (error) {
    console.error("Erro a cadastrar posto:", error);
    return { success: false, message: "Erro de login" };
  }
};
