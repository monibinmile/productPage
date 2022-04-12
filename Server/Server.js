import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDomServer from 'react-dom/server'
import App from '../src/App'
const PORT = 8000;
const app = express()
app.use('^/$', (req, res, next) => {
    false.readFile(path.resolve('./build/index.html'), 'utf-8', (err,data)=>{
        if(err){
            console.log(err)
            return res.status(500).send("some error occur")
        }
        return res.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDomServer.renderToString(<App />)}</div>`))
    })
})
app.use(express.static(path.resolve(_dirname, '..', 'build')))
app.listen(PORT, () =>{

})