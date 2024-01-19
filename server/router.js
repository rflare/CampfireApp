import * as database from './database.js'
import express from 'express'

const app = express()
const port = process.env.PORT

export function init()
{
    app.use(express.static('dist'))

    app.get('/api/get', (req, res) => {
		let posts = database.getPosts()
   		res.status(200).json(result)
    })
    
    app.post('/api/post', (req, res) => {
        console.log(req);
    })

    app.listen(port, () => {
        console.log(`Running on port ${port}`)
        console.log(`Go to http://localhost:${port}/`)
    })
}
