import { useCallback, useEffect, useState } from 'react';

import { Loader2, X } from 'lucide-react';

import api from '../services/api';
import { getReadingDetails } from '../utils/bible.parser';
import Button from './Button';

const ChapterReading = ({
  isOpen,
  onClose,
  fullReadingString,
  isCompleted,
  onComplete,
}) => {
  const [readingContent, setReadingContent] = useState([]);
  const [loading, setLoading] = useState(false);

  // função useCallback
  const loadBibleText = useCallback(async () => {
    setLoading(true);
    try {
      const details = getReadingDetails(fullReadingString);
      const allRequests = details.flatMap((bookInfo) =>
        bookInfo.chapters.map((ch) =>
          api.get(`/verses/nvi/${bookInfo.abbrev}/${ch}`),
        ),
      );

      const responses = await Promise.all(allRequests);

      const organizedData = responses.map((res) => ({
        chapterName: `${res.data.book.name} ${res.data.chapter.number}`,
        verses: res.data.verses,
      }));

      setReadingContent(organizedData);
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
  }, [fullReadingString]); // A função só muda se a string da leitura mudar

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && fullReadingString) {
      loadBibleText();
    }
  }, [isOpen, fullReadingString, loadBibleText]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-center bg-black/60 backdrop-blur-xl md:py-10">
      <div className="relative h-dvh w-full max-w-3xl overflow-y-auto bg-plan-light-black px-6 py-20 shadow-2xl transition-colors md:rounded-3xl md:px-10 md:py-12 [&::-webkit-scrollbar-button:single-button:vertical:decrement]:h-4 [&::-webkit-scrollbar-button:single-button:vertical:increment]:h-4 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-[3px] [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:border-plan-light-black [&::-webkit-scrollbar-thumb]:bg-plan-green-brand [&::-webkit-scrollbar-thumb]:bg-clip-padding [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-3">
        {/* Botão de Fechar Estilizado */}
        <button
          onClick={onClose}
          className="fixed right-8 top-8 z-[110] rounded-xl bg-white/10 p-1 text-white/60 backdrop-blur-md transition-colors hover:text-plan-green-brand"
        >
          <X size={40} />
        </button>

        {loading ? (
          <div className="flex h-full flex-col items-center justify-center gap-4">
            <Loader2 className="animate-spin text-plan-green-brand" size={40} />
            <p className="font-medium text-plan-green-brand/60">
              Buscando as Escrituras...
            </p>
          </div>
        ) : (
          <div className="space-y-12 pb-20">
            <header className="space-y-2 text-center">
              <h1 className="font-raleway text-4xl font-bold text-plan-green-brand">
                {fullReadingString}
              </h1>
              <div className="mx-auto h-1 w-20 rounded-full bg-plan-green-brand/20" />
            </header>

            {/* Loop pelas Seções (Capítulos) */}
            {readingContent.map((section, idx) => (
              <div key={idx} className="space-y-6">
                {/* TÍTULO DO CAPÍTULO */}
                <h2 className="border-l-4 border-plan-green-brand bg-plan-green-brand/5 py-1 pl-4 text-xl font-bold text-plan-green-brand/80">
                  {section.chapterName}
                </h2>

                <div className="flex flex-col gap-6">
                  {section.verses.map((v) => (
                    <p
                      key={v.number}
                      className="group text-xl leading-relaxed text-white/90"
                    >
                      <span className="mr-3 text-xs font-bold text-plan-green-brand/40 transition-colors group-hover:text-plan-green-brand">
                        {v.number}
                      </span>
                      {v.text}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Marcar como concluido! */}
            <div className="mt-12 flex flex-col items-center justify-center gap-6 border-t border-plan-green-brand/20 pt-10">
              <h1 className="text-center font-raleway text-3xl font-bold text-plan-green-brand">
                {isCompleted
                  ? 'Leitura de hoje já concluída! 🎉'
                  : 'Aqui finalizamos a Leitura de Hoje! Parabéns, continue firme.'}
              </h1>

              {/* 2. O botão reage ao estado isCompleted e aciona o onComplete */}
              <Button
                color={isCompleted ? 'ghost' : 'outline'}
                onClick={onComplete}
              >
                {isCompleted ? 'Desmarcar leitura' : 'Marcar como concluído!'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChapterReading;
