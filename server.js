let express = require('express')
let app = express()//charger expressjs
let bodyParser = require('body-parser')

//moteur de template
app.set('view engine', 'pug')

//MIDDLEWARE
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//gerer mon util
//a la page racine lance une fonction
//ROUTE
app.get('/', (request, response) => {
    response.render('pages/index', {test: 'Salut'})
})

//route
app.post('/', (request, response) => {
    if (request.body.message === undefined || request.body.message === '') {
        response.render('pages/index', {error: "Vous n'avez pas rentre de message :("})
    }
})

app.listen(8080)