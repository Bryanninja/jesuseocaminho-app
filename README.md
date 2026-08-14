# Jesus é o Caminho 🙏

**Jesus é o Caminho** é uma aplicação web interativa focada em proporcionar uma experiência diária de leitura bíblica e reflexão. Desenvolvida com React, Vite, Tailwind CSS e Framer Motion, o projeto visa ser uma ferramenta rápida, moderna e acolhedora para o seu momento devocional diário.

## 🚀 Tecnologias e Ferramentas

Este projeto utiliza algumas das tecnologias mais modernas do ecossistema front-end:

- **[React 19](https://react.dev/)**: Biblioteca principal para construção da interface de usuário.
- **[Vite](https://vitejs.dev/)**: Empacotador de módulos super rápido para um desenvolvimento ágil.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilitários CSS para estilização rápida, consistente e responsiva.
- **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animações fluidas e micro-interações.
- **[React Router DOM](https://reactrouter.com/)**: Gerenciamento de rotas e navegação da aplicação (SPA).
- **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones elegantes e facilmente customizáveis.
- **[Axios](https://axios-http.com/)**: Cliente HTTP voltado para integrações e consumo de APIs externas.

## ✨ Principais Funcionalidades

- **Boas-vindas Personalizada**: O aplicativo saúda o usuário pelo nome (com dados salvos no `localStorage` do navegador).
- **Leitura Diária**: Apresenta passagens e leituras bíblicas diárias de forma limpa, focada e agradável de ler.
- **Plano de Leitura**: Acompanhamento contínuo da jornada bíblica do usuário através da rota dedicada (`/plan`).
- **Experiência Visual Imersiva**: Interface limpa e responsiva com feedback visual refinado e animações suaves usando Framer Motion e Tailwind.

## 📦 Como rodar o projeto localmente

Siga os passos abaixo para configurar e rodar a aplicação no seu ambiente de desenvolvimento:

### 1. Pré-requisitos

Certifique-se de ter o **[Node.js](https://nodejs.org/)** instalado em sua máquina (recomendado versão 18 ou superior).

### 2. Instalação

Se você já clonou o repositório, instale as dependências executando na raiz do projeto:

```bash
# Instale as dependências (usando npm)
npm install
```

### 3. Executando em modo de desenvolvimento

```bash
npm run dev
```

O servidor será iniciado quase instantaneamente. Acesse o endereço indicado no terminal (geralmente [http://localhost:5173](http://localhost:5173)) no seu navegador.

## 🛠️ Scripts Disponíveis

- `npm run dev`: Inicia o servidor local de desenvolvimento do Vite.
- `npm run build`: Cria uma versão empacotada e otimizada da aplicação para produção.
- `npm run lint`: Executa o ESLint em todo o código para garantir padrões de estilo e qualidade.
- `npm run preview`: Inicia um pequeno servidor web estático para você pré-visualizar a versão gerada no comando de build.

## 📁 Visão Geral da Estrutura

Abaixo está o resumo dos diretórios essenciais dentro da pasta `src/`:

```text
src/
├── assets/         # Arquivos estáticos como imagens e SVGs
├── components/     # Componentes de UI modulares (Modais, Cards, Headers, etc.)
├── context/        # Contextos (React Context API) para estados compartilhados
├── pages/          # Componentes que representam as páginas (Home, Plan, WrongPath)
├── services/       # Arquivos focados em chamadas a serviços externos / APIs
├── utils/          # Funções auxiliares, formatações e utilitários globais
├── App.jsx         # Configuração de rotas principais e estrutura raiz
└── main.jsx        # Ponto de entrada que renderiza o React no DOM
```

---
*Feito com propósito e dedicação. Que este aplicativo seja uma ponte diária para a Palavra!* 📖✨
