const express = require('express')

const http = require('http')

const app = express()

let router = express.Router()

const connection = require('./sql')

connection.connect(function (err) {
    if (err) {
        console.log('query:--' + err)
        return
    }
    console.log("connection success")
})

app.get('/', function (req, res) {
    let res = res
    let req = req

    let sql = "select descript ,title, content,time from tp_post"
    connection.query(sql,function(err,rows,fields){
        if(err){
            console.log('query:--'+err)
            return
        }
        res.send(res)
    })
})

module.exports = app