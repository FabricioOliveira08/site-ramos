# Ramos — Computação em Comunidade

**Do primeiro passo ao primeiro projeto.**

🌐 **Site oficial:** [ Acessar o Ramos ](https://ramos-campus-iv.vercel.app/)

O **Ramos** é uma proposta de iniciativa estudantil independente, idealizada por estudantes do **Campus IV da Universidade Federal da Paraíba (UFPB)**. A ideia é aproximar estudantes iniciantes das diferentes possibilidades da Computação, combinando orientação, prática e compartilhamento de conhecimentos.

Este repositório contém o **site de apresentação da proposta**, desenvolvido para apoiar conversas com professores, estudantes e possíveis colaboradores. O site não é uma plataforma de ensino nem representa, neste momento, um projeto institucionalmente formalizado.

> **Situação da iniciativa:** proposta em construção, com uma trilha piloto planejada. Não há parcerias ou apoio institucional confirmados.

## 🎯 Objetivo

Apresentar de forma clara e acessível como o Ramos pretende contribuir para a trajetória de quem está começando na Computação, especialmente estudantes dos primeiros períodos de **Licenciatura em Ciência da Computação (LCC)** e **Sistemas de Informação (SI)**.

A proposta parte de três princípios:

- **Lógica antes da ferramenta:** valorizar os fundamentos e o raciocínio.
- **Prática com acompanhamento:** aprender fazendo, com orientação e espaço para dúvidas.
- **Conhecimento compartilhado:** incentivar a troca de experiências entre estudantes.

## 🧭 O que o site apresenta

- **A proposta:** problema identificado, público inicial e princípios do Ramos.
- **Trilha piloto:** módulos introdutórios e atividades práticas planejadas.
- **Plano de ação:** etapas para preparar, executar e avaliar o piloto.
- **Equipe:** pessoas envolvidas e responsabilidades iniciais.
- **Horizontes:** possibilidades futuras, ainda sujeitas a discussão e validação.
- **Para professores:** pontos sobre os quais a equipe busca orientação pedagógica e institucional.

## 🛠️ Tecnologias

- **React** — construção da interface por componentes.
- **JavaScript (JSX)** — lógica e renderização do conteúdo.
- **HTML e CSS** — estrutura, estilos e responsividade.
- **Vite** — ambiente de desenvolvimento e build de produção.
- **Git e GitHub** — versionamento do código.
- **Vercel** — hospedagem e publicação do site.

## 🚀 Executando localmente

**Pré-requisitos:** Node.js e npm instalados.

1. Clone o repositório:

   ```bash
   git clone https://github.com/FabricioOliveira08/site-ramos.git
   ```

2. Entre na pasta do projeto e instale as dependências:

   ```bash
   cd site-ramos
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra no navegador o endereço informado pelo terminal.

### Outros comandos

```bash
npm run build    # Gera a versão de produção na pasta dist/
npm run preview  # Visualiza localmente o build de produção
npm run lint     # Executa a verificação do ESLint
```

## 📁 Organização do projeto

```text
src/
├── components/
│   ├── layout/       # Header e Footer
│   └── ui/           # Button, SectionTitle e Accordion
├── data/
│   └── content.js    # Conteúdo utilizado pelas seções
├── sections/         # Seções da página de apresentação
├── styles/           # Estilos globais
├── App.jsx           # Composição das seções
└── main.jsx          # Entrada da aplicação
```

O projeto separa **conteúdo, componentes reutilizáveis e estilos**, facilitando ajustes na apresentação sem concentrar tudo em um único arquivo.

📌 Estado atual

Site publicado e disponível para acesso público.

A primeira versão do Ramos foi concluída, com todas as seções implementadas, layout responsivo, navegação funcional e build de produção validado.

A aplicação está hospedada na Vercel, com o repositório conectado ao GitHub para facilitar futuras atualizações.

O site poderá evoluir conforme a iniciativa estudantil avançar e novas necessidades forem identificadas.
---

**Ramos — Computação em Comunidade** 🌱

*Uma proposta independente de estudantes do Campus IV da UFPB.*
