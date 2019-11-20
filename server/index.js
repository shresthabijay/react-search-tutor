const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => res.send('Hi there!'));

app.listen(port, () => console.log(`Demo server listening on port ${port}!`))