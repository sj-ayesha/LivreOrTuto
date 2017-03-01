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

app.use(require('./middlewares/flash.js'))

//gerer mon util
//a la page racine lance une fonction
//ROUTE
app.get('/', (request, response) => {
    console.log(request.session)
    response.render('pages/index')
})

//route
app.post('/', (request, response) => {
    if (request.body.message === undefined || request.body.message === '') {
        request.flash('error', 'Il na pas de message')
        response.redirect('/')
    }
})

app.listen(8080)