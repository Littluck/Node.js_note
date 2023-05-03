const fs = require('fs')
const path = require('path')
const http = require('http')

// 一.
/* fs.readFile('./Code/01.js', 'utf-8', function (err, data) {
    if (err) return console.log(err.message)
    console.log(data)
})

fs.writeFile('./Code/01.js', 'const age = 18', 'utf-8', function (err) {
    if (err) return console.log(err.message)
    console.log('Successfully!')
}) */

// 写入评分案例
fs.readFile(__dirname + '/01.test.txt', 'utf-8', function (err, data) {
    if (err) return console.log(err.message)
    console.log(data)
    // data.replace('=', ':')
})

fs.writeFile(__dirname + '/01_test_result.txt', 'str', 'utf-8', function (err) {
    if (err) return console.log(err.message)
})

// 二.
// server.addEventListener('request', function (req, res) {
//     const str = `你请求的URL地址为${req.url},请求的method类型为${req.method}`

//     res.setHeader('Content-Type', 'text/html; charset=ytf-8')

//     res.end(str)
// })

console.log('我已经被提交到 Git 中')