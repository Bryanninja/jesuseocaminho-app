import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.abibliadigital.com.br/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiJUdWUgTWFyIDE3IDIwMjYgMTM6NDI6MDkgR01UKzAwMDAuYnJ5YW5uY29kZUBnbWFpbC5jb20iLCJpYXQiOjE3NzM3NTQ5Mjl9.VGv_RAobAvtMagTNEV_dU8ak0BDP857TWKJs9FsDhwM',
  },
});

export default api;

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
