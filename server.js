let express = require('express')
let app = express()//charger expressjs

//moteur de template
app.set('view engine', 'pug')

//route
app.use('/assets', express.static('public'))

//gerer mon util
//a la page racine lance une fonction
app.get('/', (request, response) => {
    response.render('pages/index', {test: 'Salut'})
})

app.listen(8080)