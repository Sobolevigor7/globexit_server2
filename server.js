require('dotenv').config();
const express = require('express');
const  nunjucks = require('nunjucks');
const cors = require('cors');
const app = express();
const server = express();
const port = process.env.PORT || 3000;

nunjucks.configure('views', {
  autoescape: true,
  express: app,
})


app.set('view engine', "njk");
app.use(express.json());
app.use(express.static('public'))
app.use(cors());
server.use(cors());


const knex = require('knex') ({
client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  }
})
    app.get('/', async (request, reply) => {
      console.log('app');
  reply.render("index")});

  server.get('/', async (request, reply) => {
    console.log('server')
  try {
    const res = await knex.select('info').table('users');
    let users = [];
    for (const el of res) {
      users.push(el.info)
    }
    if (request.query.term) {
      const result = users.filter((elem) => elem.name.toLowerCase().search(request.query.term.toLowerCase()) !== -1);
      reply.send(JSON.stringify(result));
    } else {

      reply.send(JSON.stringify(users));
    }
  } catch (err) {
    console.log(err.message);
    reply.status(400).send(err.message);
  }; });



server.listen(port, '127.0.0.1', () => {
  console.log(`Server started at http://127.0.0.1:${port}`);
})

app.listen(port,  ()=> {
  console.log(`Application started art http://localhost:${port}`);
});

