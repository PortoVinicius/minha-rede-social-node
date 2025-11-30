# Usar a imagem oficial do Node.js
FROM node:16

# Definir o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copiar o package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código para dentro do contêiner
COPY . .

# Expor a porta 3000
EXPOSE 3000

# Rodar o servidor
CMD ["node", "app.js"]
