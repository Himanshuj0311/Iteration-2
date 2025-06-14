const express = require('express');
const app = express();
const port = 3000;

// ==== Middleware to log all requests ====
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ==== Middleware to parse body ====
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==== Serve static files from "public" folder ====
app.use(express.static('public'));

// ==== Basic Routes ====
app.get('/', (req, res) => res.send('Welcome to the Home Page'));
app.get('/about', (req, res) => res.send('About this Express App'));

// ==== Handle Form Submission ====
app.post('/submit', (req, res) => {
  const { username } = req.body;
  res.send(`Form submitted. Hello, ${username}!`);
});

// ==== In-Memory Mock Data ====
let items = [{ id: 1, name: 'Item One' }];

// ==== CRUD REST API ====
app.get('/items', (req, res) => res.json(items));

app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id == req.params.id);
  item ? res.json(item) : res.status(404).send('Item not found');
});

app.post('/items', (req, res) => {
  const newItem = { id: Date.now(), ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id == req.params.id);
  if (index !== -1) {
    items[index] = { ...items[index], ...req.body };
    res.json(items[index]);
  } else {
    res.status(404).send('Item not found');
  }
});

app.delete('/items/:id', (req, res) => {
  items = items.filter(i => i.id != req.params.id);
  res.send('Item deleted');
});

// ==== Start Server ====
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
