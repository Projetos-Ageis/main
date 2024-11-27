import api from "../../api/api.js";

export const PutPosto = async (id, diesel, etanol, gasolina) => {
  try {
    const response = await api.put(`/Posto/editarpreco?id=${id}`, {
      gasolina,
      diesel,
      etanol,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao tentar atualizar os preços:", error);
    throw error;
  }
};
