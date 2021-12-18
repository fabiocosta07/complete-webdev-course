const fs = require('fs')
const path = require('path')
const { resolve } = require('path/posix')

const caminho = path.join(__dirname, 'dados.txt')

const lerArquivo = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, (err, content) => {
            if (err) {
                reject(err)
            }
            resolve(content.toString())
        })
    })
}

lerArquivo().then(data => {
    console.log(data)
})
