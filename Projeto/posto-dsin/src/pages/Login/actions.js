import api from "../../api/api.js"


export const GetOdata = async (email, senha) => {
    try {
      const response = await api.post("/DonoPosto/logar", {
        email,
        senha,
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao tentar logar:", error);
      return { success: false, message: "Erro de login" };
    }
  };
  

  
  