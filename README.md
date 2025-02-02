# 🚀 Site Portfolio

## 📌 Introdução
![img](/image/Captura%20de%20tela%20de%202025-02-01%2021-19-52.png)
Este projeto, **Site Portfolio**, é uma plataforma web dinâmica e personalizável, criada para exibir seu portfólio profissional de forma integrada com o GitHub. O objetivo principal é simplificar a criação e manutenção de um portfólio online, permitindo que usuários como você, com conhecimentos técnicos, possam exibir seus projetos, habilidades e informações de forma eficaz. Ele resolve o problema da necessidade de construir um portfólio do zero, oferecendo uma solução rápida e personalizável, que se atualiza automaticamente com as informações do GitHub e de um arquivo de configuração.

## ✨ Recursos e funcionalidades

- **Integração com GitHub:** O site busca automaticamente informações do seu perfil no GitHub, como nome de usuário e foto.
- **Configuração Personalizada:** Através de um arquivo `config.js`, você pode customizar informações como seu nome, link do LinkedIn e dados dos seus projetos.
- **Destaque de Projetos:** Exibe seus projetos em um formato de "histórias", com título, descrição, links e imagem.
- **Layout Responsivo:** O site é totalmente responsivo, adaptando-se a diferentes tamanhos de tela (desktop, tablets e smartphones).
- **Atualização Automática:** Ao alterar o arquivo de configuração e/ou seu perfil no GitHub, o portfólio se atualiza automaticamente.
- **Facilidade de Uso:** Configuração simples e rápida, ideal para desenvolvedores e outros profissionais de tecnologia.

## 🛠️ Tecnologias Utilizadas

- ✅ **Next.js:** Framework React para construção de aplicações web com renderização do lado do servidor, o que otimiza performance e SEO.
- ✅ **GitHub API:** Para buscar informações do perfil do usuário, como foto e nome.
- ✅ **Docker:** Para containerização da aplicação, facilitando o deploy e a reprodução em diferentes ambientes.
- ✅ **Docker Compose:** Para gerenciar múltiplos containers Docker, simplificando a configuração e o desenvolvimento local.
- ✅ **JavaScript:** Linguagem de programação utilizada para a lógica da aplicação e manipulação de dados.

## ⚙️ Pré-requisitos e Instalação

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

1.  **Node.js:** (versão 18 ou superior) - [Download Node.js](https://nodejs.org/)
2.  **npm ou yarn:** Gerenciador de pacotes do Node.js.
3.  **Docker:** (versão 20.10 ou superior) - [Download Docker](https://docs.docker.com/get-docker/)
4.  **Docker Compose:** (versão 1.29 ou superior) - Geralmente instalado junto com o Docker Desktop.

**Passos para instalar e configurar o projeto:**

1.  **Clonar o repositório:**
    ```bash
    git clone https://github.com/marco0antonio0/Portfolio
    cd Portfolio
    ```

2.  **Instalar as dependências:**
    ```bash
    npm install #ou yarn install
    ```

3. **Configurar o Arquivo `config.js`:**
    - Localize o arquivo `config.js` na raiz do projeto.
    - Altere as variáveis `github_user`, `nome` e `link_linkedln` com suas informações.
    - Personalize o array `storiesData` com seus projetos.
4. **Iniciar o projeto:**
    ```bash
    docker-compose up --build
    ```
    
    Este comando irá construir a imagem Docker e executar a aplicação.

5. **Acessar a aplicação:**
   - Após a execução do comando acima, a aplicação estará acessível no seu navegador, pelo endereço: `http://localhost:3000`.

## 📝 Como usar

1.  Após seguir os passos de instalação, acesse a aplicação no seu navegador.
2.  O site exibirá suas informações do GitHub, seu nome, link do LinkedIn e os projetos configurados no `config.js`.
3.  Para atualizar os dados, modifique o arquivo `config.js` e/ou seu perfil no GitHub, salve as alterações e recarregue a página.
4. A alteração no arquivo config.js ou no perfil do github é refletida automaticamente no seu portfólio.

## 💻 Exemplos de código

**Exemplo do arquivo `config.js`:**

```javascript
export const github_user = 'seu_usuario_github';
export const nome = 'Seu Nome Completo';
export const link_linkedln = "www.linkedin.com/in/seu_perfil_linkedin";

export const storiesData = [
  {
    "title": "Nome do Projeto 1",
    "description": "Descrição do Projeto 1",
    "link": "https://link_do_projeto_1.com",
    "image": "https://url_da_imagem_do_projeto_1.png",
    "author": "seu_usuario_github",
    "date": "Mês Ano"
  },
  {
    "title": "Nome do Projeto 2",
    "description": "Descrição do Projeto 2",
    "link": "https://link_do_projeto_2.com",
    "image": "https://url_da_imagem_do_projeto_2.png",
     "author": "seu_usuario_github",
    "date": "Mês Ano"
  }
];
```

## 📂 Estrutura de Diretórios

```
PORTFOLIO/
│── .next/               # Diretório gerado automaticamente pelo Next.js
│── components/          # Componentes reutilizáveis
│   ├── storys/         # Componente para exibição de stories
│   │   ├── index.tsx   # Arquivo principal do componente StoriesList
│── node_modules/        # Dependências do projeto
│── pages/               # Páginas do Next.js
│   ├── api/             # APIs do Next.js
│   │   ├── hello.ts     # Exemplo de API
│   ├── fonts/           # Arquivos relacionados a fontes
│   │   ├── _app.tsx     # Componente raiz do Next.js
│   │   ├── _document.tsx # Configuração do documento HTML
│   │   ├── index.tsx    # Página principal do portfólio
│── public/              # Arquivos públicos (icones, imagens, etc.)
│   ├── icons/           # Ícones utilizados no projeto
│   ├── favicon.ico      # Ícone do site
│   ├── github-cover.jpg # Imagem de capa do GitHub
│── styles/              # Estilos globais do projeto
│   ├── globals.css      # Arquivo de estilos globais
│── utils/               # Utilitários do projeto
│   ├── config.tsx       # Configurações gerais
│   ├── TypingEffect.tsx # Efeito de digitação para texto animado
│── .gitignore           # Arquivo para ignorar arquivos no Git
│── docker-compose.yaml  # Configuração para execução via Docker
│── Dockerfile           # Configuração para criar imagem Docker
│── next-env.d.ts        # Arquivo de tipagem do Next.js
│── next.config.js       # Configuração do Next.js
│── package-lock.json    # Arquivo de lock das dependências
│── package.json         # Arquivo de dependências e scripts
│── postcss.config.mjs   # Configuração do PostCSS
│── tailwind.config.ts   # Configuração do Tailwind CSS
│── tsconfig.json        # Configuração do TypeScript
│── README.md            # Documentação do projeto
```

## 🤝 Contribuição

Contribuições são bem-vindas! Siga as seguintes diretrizes:

1.  Faça um fork do repositório.
2.  Crie uma branch para sua feature (`git checkout -b feature/sua-feature`).
3.  Faça suas alterações e commit (`git commit -m "Adiciona sua feature"`).
4.  Faça push para sua branch (`git push origin feature/sua-feature`).
5.  Abra um Pull Request.

Para reportar bugs ou sugerir melhorias, abra uma issue no repositório.

## 📜 Licença

Este projeto é licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

[MIT License](https://opensource.org/licenses/MIT)
