import express from 'express'
import cors from 'cors'
import movies from './api/movies.route.js'  //

const app = express()
//initializing the web server
app.use(cors()) 
app.use(express.json())

app.use("/api/v1/movies", movies)
app.use('*', (req,res)=>{ //req is request. res is respond
 res.status(404).json({error: "not found"})
})

export default app