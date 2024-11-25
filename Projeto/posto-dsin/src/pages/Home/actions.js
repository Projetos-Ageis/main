import api from "../../api/api.js"


export const GetOdata = async () => {
    try {
      const response = await api.get("/DonoPosto/donoposto");
      return response.data;
    } catch (error) {
      console.error("Erro a puxar informação:", error);
      return { success: false, message: "Erro de login" };
    }
  };
export const GetPosto = async () => {
    try {
      const response = await api.get("/Posto/getporpreco");
      return response.data;
    } catch (error) {
      console.error("Erro a puxar informação:", error);
      return { success: false, message: "Erro de login" };
    }
  };
  

  
  