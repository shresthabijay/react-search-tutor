const express = require('express')
const app = express()
const cors = require('cors');
const port = 3005

const data = require('../activities.json')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => res.json(data));

app.post('/search', (req, res) => {
    console.log(req.body)
    const searchText = req.body.searchText;
    const results = data.tours.filter((tour)=> 
        tour.title.toLowerCase().includes(searchText.toLowerCase())
    );
    res.send(results)
})

app.listen(port, () => console.log(`Demo server listening on port ${port}!`))