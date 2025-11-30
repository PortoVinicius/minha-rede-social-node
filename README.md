# Minha Rede Social com Node.js

Este é um projeto simples de uma rede social criada com **Node.js** e **Express**. O objetivo é explorar conceitos básicos de desenvolvimento de back-end, como rotas, gerenciamento de dados em memória e integração com o front-end utilizando **HTML** e **CSS**.

## Estrutura do Projeto
```bash
minha-rede-social-node/
│
├── app.js                # Seu arquivo principal de backend (Node.js)
├── Dockerfile            # Arquivo Dockerfile para criar a imagem do Node.js
├── docker-compose.yml    # Arquivo Docker Compose para orquestrar contêineres
├── package.json          # Gerenciador de pacotes para dependências do Node.js
├── README.md             # Documentação do projeto
└── .dockerignore         # Ignorar arquivos desnecessários no Docker
```

### Requisitos

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

### Passo 1: Clonar o repositório

Primeiro, clone o repositório para o seu computador:
```bash
git clone https://github.com/PortoVinicius/minha-rede-social-node.git
cd minha-rede-social-node

### Passo 2: Instalar as dependências

Instale as dependências necessárias do Node.js (como o Express):
```bash
npm install

node app.js
```

### Tecnologia Utilizada

Node.js: Plataforma JavaScript no lado do servidor.
Express.js: Framework para simplificar o roteamento HTTP e o gerenciamento de requisições.
HTML/CSS: Para estruturar e estilizar a interface do usuário.

### No diretório do seu projeto, instale o Mongoose:
```bash
npm install mongoose
```

### Docker 
```bash
docker-compose up --build
```
### Parar os contêineres:
```bash
docker-compose down
```
## minha-rede-social-node

No navegador tenha acesso a rede-socila em:  http:localhost:3000
