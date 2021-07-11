import Express from 'express'
import path from 'path'
import router from './routes'
import layouts from 'express-ejs-layouts'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

mongoose.connect('mongodb://localhost:27017/test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.Promise = global.Promise

const app = Express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))
app.use(layouts)
app.use(Express.static(__dirname + '/public'))
app.use('/', router)
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )
app.use(bodyParser.json);

app.listen(port, () => {
  console.log('server start')
})
