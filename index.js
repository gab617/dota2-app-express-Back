const express = require('express')//    se importa express
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('./loggerMiddleware')

const { getDataDota2Api, getHeroDataApi, getPing } = require('./services/urls-Dota2')

const app = express()// se declara app con servidor express
app.use(cors({ origin: true }))// por defecto cualquier origen funciona en nuestra api
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())// soluciona temas de parseo para comunicacion servior-cliente
app.use(logger)// al usar USE, sin definir un path especifico para analizar, todos los paths pasaran en logger.

/* const app = http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'application/json'})
    response.end(JSON.stringify(tasks))
})
 */
/* Si hago un ping ni bien abierto el portfolio donde esta la url de mi aplicacion, activa el
servidor ni bien entrado en el protfolio? */
app.get('/api/ping', getPing)

// Desde services, en un json ya definido con los datos de lo heroes, se envia mediante la funcion getDataDota2Api
// getDataDota2Api, se envia al front, los datos del json con el que va a renderizar su contenido.
app.get('/api/dota2', getDataDota2Api)

// la respuesta es el objeto con todas las caracteristicas del personaje (el cual se pide mediante la id) id que se envio desde
// el front por otra peticion
app.get('/api/dota2/:id', getHeroDataApi)

// si la peticion anterior da next() el dato no se encuentra guardado en los archvios del servior, por ende lo pide a la api externa y lo guarda en el archivo json de los detalles.
/* app.get('/api/dota2/:id', (req, res) => {
  console.log('dato no guardado jamas')
  const id = +req.params.id

  const url = `https://dota2-heroes.p.rapidapi.com/heroes/english/${id}`
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'apikey si tuviera',
      'X-RapidAPI-Host': 'dota2-heroes.p.rapidapi.com'
    }
  }
  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      dataDetails.push(json)
      console.log(dataDetails)
      res.send(json)
    })
    .catch()
  res.send(dataDetails)
}) */

/* app.get('/save-new-data/', (req, res) => {
  const jsonData = JSON.stringify(dataDetails)
  fs.writeFileSync('services/herosDetail.json', jsonData, 'utf-8')
  console.log(dataDetails)
  res.send('Data actualizada')
}) */

app.use((request, response) => {
  console.log('ERROR EN PATH ', request.path)
  response.status(404).json({
    error: 'Not found'
  })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server on port ${port}`) // mensaje en consola luego de levantar el servidor
})
