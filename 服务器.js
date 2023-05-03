const express = require('express')

// 创建 web 服务器
const app = express()

app.get('/user', function (req, res) {
    res.send({name:'王妍妍', age:21, gender:'female'})
})

app.post('/user', function (req, res) {
    res.send('Request successful!')
})

app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1')
})