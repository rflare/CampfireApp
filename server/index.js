//TODO: Add modules 
//Just another comment
//Second useless comment
require('dotenv').config()

const mysql = require('mysql2')
const express = require('express')
const app = express()
const port = process.env.PORT

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DATABASE,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 50,
    idleTimeout: 60000,
})

app.use(express.static('dist'))

app.get('/api/get', (req, res) => {
    pool.query('SELECT * FROM posts LIMIT 50', (err, result) => {
        if (err)
            throw err

        res.status(200).json(result)
    })
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
    console.log(`Go to http://localhost:${port}/`)
})
