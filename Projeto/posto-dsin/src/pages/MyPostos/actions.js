import api from "../../api/api.js"

export const GetPosto = async () => {
    try {
      const response = await api.get("/DonoPosto/postos");
      return response.data;
    } catch (error) {
      console.error("Erro a puxar informação:", error);
      return { success: false, message: "Erro" };
    }
  };