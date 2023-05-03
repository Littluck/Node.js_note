const express = require('express')

// 创建 web 服务器
const app = express()

// 静态资源处理
// app.use(express.static('../day1'))
app.use('/test', express.static('../day1'))
// 这段代码块需要放在 app.get 之前


/* app.get('/user', function (req, res) {
    // res.send({name:'王妍妍', age:21, gender:'female'})

    // 静态参数
    res.send(req.query)
}) */

// 动态参数
app.get('/:name/:age/:gender', (req, res) => {
    res.send(req.params)
})

app.post('/user', function (req, res) {
    res.send('Request successful!')
})

app.listen(3000, () => {
    console.log('express server running at http://127.0.0.1')
})