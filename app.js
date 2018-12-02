const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(express.static(__dirname + '/src/'));

app.get('/', (_, res) => {
    res.sendFile(__dirname + '/src/index.html');
})

app.listen(PORT, _ => console.log(`server running on port *${PORT}`))