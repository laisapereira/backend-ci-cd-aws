import express from 'express'
import bodyParser from 'body-parser';
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/user', (req, res) => {
  const { firstName, lastName } = req.body;
  res.send(`Olá ${firstName} ${lastName}`);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
