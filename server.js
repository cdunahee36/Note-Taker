const express = require('express');
const path = require('path');
const fs = require('fs');
const noteJSON = require('./db.json');
const PORT = 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//These are the html get routes that bring them to the server
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './notes.html'));
});

//These are the api routes that connect and use the index.js file to render the notes onto the page
app.get('/api/notes', (req, res) => {
  res.json(noteJSON);
});

//This post method is pushing the data from the db.json file into the html body
app.post('/api/notes', (req, res) => {
  const lastId = noteJSON.length ? Math.max(...(noteJSON.map(note => note.id))) : 0;
  const id = lastId + 1;
  noteJSON.push( { id, ...req.body} );
  res.json(noteJSON.slice(-1));
});

//This method allows the user to delete an unwanted note
app.delete('/api/notes/:id', (req, res) => {
  let note = noteJSON.find( ({ id }) => id === JSON.parse(req.params.id));
  noteJSON.splice( noteJSON.indexOf(note), 1);
  res.end("Note deleted");
});

//Starts the server and allows you to click on it
app.listen(PORT, () => console.log("Server listening on: http://localhost:" + PORT));