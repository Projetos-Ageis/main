import api from "../../api/api.js"


export const RegisterAPI = async (nome,cpf,email,senhaHasheada,telefone) => {
    try {
      const response = await api.post("/DonoPosto/criarconta", {
        nome,
        cpf,
        email,
        senhaHasheada,
        telefone
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao tentar logar:", error);
      return { success: false, message: "Erro de login" };
    }
  };
  

  
  