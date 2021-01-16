const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<h1>Update Test</h1><p>Bye bye manual updates</p><p>Test manual approval</p>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
