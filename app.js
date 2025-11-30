const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Conectar ao MongoDB
mongoose.connect('mongodb://db:27017/minharedesocial')
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.log('Erro de conexão com o MongoDB:', err));

// Definir um schema de post
const postSchema = new mongoose.Schema({
  author: String,
  content: String,
});

const Post = mongoose.model('Post', postSchema);

// Middleware para processar formulários
app.use(express.urlencoded({ extended: true }));

// Rota para a página inicial
app.get('/', async (req, res) => {
  const posts = await Post.find();
  let postsHtml = posts.map(post => 
    `<div><strong>${post.author}</strong>: ${post.content}</div>`
  ).join('');
  
  const html = `
    <html>
      <head>
        <title>Minha Rede Social</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .post { margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <h1>Bem-vindo à minha rede social!</h1>
        <h2>Posts:</h2>
        <div>${postsHtml}</div>
        <form method="POST" action="/add-post">
          <input type="text" name="author" placeholder="Seu nome" required>
          <textarea name="content" placeholder="O que você quer compartilhar?" required></textarea>
          <button type="submit">Publicar</button>
        </form>
      </body>
    </html>
  `;
  res.send(html);
});

// Rota para adicionar um post
app.post('/add-post', async (req, res) => {
  const { author, content } = req.body;
  const newPost = new Post({ author, content });
  await newPost.save();
  res.redirect('/');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
