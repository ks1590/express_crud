import Express from 'express'
import path from 'path'
import router from './routes'
import layouts from 'express-ejs-layouts'

const app = Express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))
app.use(layouts)
app.use(Express.static(__dirname + '/public'))
app.use('/', router)

app.listen(port, () => {
  console.log('server start')
})
