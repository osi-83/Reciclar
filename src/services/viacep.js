export const buscarEnderecoPorCEP = async (cep) => {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        return await response.json();
    }
    catch (error) {
        console.error('Erro ao buscar endereço:', error);
        return null;
    }
};
