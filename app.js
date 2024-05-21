const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('A necessary means for a, a necessary means for a higher education'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
