import express from 'express'

const app = express()

app.get('/', (req,res) => res.send('Hello Docker'))

app.listen(3000, '0.0.0.0')