let express = require('express')
let app = express()//charger expressjs
let bodyParser = require('body-parser')
let session = require('express-session')

//moteur de template
app.set('view engine', 'pug')

//MIDDLEWARE
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  secret: 'ayesha',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

//gerer mon util
//a la page racine lance une fonction
//ROUTE
app.get('/', (request, response) => {
    if (request.session.error) {
        response.locals.error = request.session.error
        request.session.error = undefined
    }
    response.render('pages/index')
})

//route
app.post('/', (request, response) => {
    if (request.body.message === undefined || request.body.message === '') {
        request.session.error = "Il y a une erreur!"
        response.redirect('/')
    }
})

app.listen(8080)