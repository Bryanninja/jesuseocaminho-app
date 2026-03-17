import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.abibliadigital.com.br/api',
});

/**
 * Função para buscar o conteúdo de um único capítulo
 * @param {string} abbrev - Abreviação do livro (ex: 'gn')
 * @param {number} chapter - Número do capítulo
 */
export const fetchChapter = async (abbrev, chapter) => {
  try {
    // Usamos a versão NVI por padrão
    const response = await api.get(`/verses/nvi/${abbrev}/${chapter}`);

    // Retornamos o array de versículos
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar ${abbrev} ${chapter}:`, error);
    throw error; // Repassa o erro para o componente tratar (mostrar aviso na tela)
  }
};
