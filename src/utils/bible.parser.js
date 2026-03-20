/**
 * Transforma "13-15" em [13, 14, 15]
 */
const parseChapterRange = (rangeStr) => {
  if (rangeStr.includes('-')) {
    const [start, end] = rangeStr.split('-').map(Number);
    const chapters = [];
    for (let i = start; i <= end; i++) {
      chapters.push(i);
    }
    return chapters;
  }
  return [Number(rangeStr)];
};

/**
 * Processa "Gn 13-15, Mt 5"
 * Devolve: [ { abbrev: "gn", chapters: [13,14,15] }, { abbrev: "mt", chapters: [5] } ]
 */
export const getReadingDetails = (fullString) => {
  if (!fullString) return [];

  // 1. Divide pela vírgula: ["Gn 13-15", "Mt 5"]
  const readings = fullString.split(', ');

  return readings.map((reading) => {
    const lastSpaceIndex = reading.lastIndexOf(' ');

    // Pegamos a abreviação (ex: "Gn")
    const rawAbbrev = reading.substring(0, lastSpaceIndex);
    // Pegamos o intervalo (ex: "13-15")
    const rangeStr = reading.substring(lastSpaceIndex + 1);

    return {
      // transformamos em minúsculo para a API aceitar
      abbrev: rawAbbrev.toLowerCase(),
      chapters: parseChapterRange(rangeStr),
      title: reading, // Para mostrar no título do modal
    };
  });
};
