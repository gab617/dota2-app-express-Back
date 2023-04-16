const express = require('express')//    se importa express
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('./loggerMiddleware')

const { getDataDota2Api, getHeroDataApi, getApiExternaDataHeros } = require('./services/urls-Dota2')

const app = express()// se declara app con servidor express
app.use(cors()) // por defecto cualquier origen funciona en nuestra api
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())// soluciona temas de parseo para comunicacion servior-cliente
app.use(logger)// al usar USE, sin definir un path especifico para analizar, todos los paths pasaran en logger.

/* const app = http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'application/json'})
    response.end(JSON.stringify(tasks))
})
 */

// Desde services, en un json ya definido con los datos de lo heroes, se envia mediante la funcion getDataDota2Api
// getDataDota2Api, se envia al front, los datos del json con el que va a renderizar su contenido.
app.get('/api/dota2', getDataDota2Api)

// 2 maneras de pedir los datos, llamando a una constante que contiene los datos, con datos ya definidos en la carpeta services ([archivos json])
// getHeroDataApi usa el [{data.heroe}] definido en services
// getApiExternaDataHeros usa una peticion a otra api de la cual son originarios los datos mediante una peticion fetch,
// la respuesta es el objeto con todas las caracteristicas del personaje (el cual se pide mediante la id) id que se envio desde 
// el front por otra peticion
app.get('/api/dota2/:id', getHeroDataApi)

app.use((request, response) => {
  console.log('ERROR EN PATH ', request.path)
  response.status(404).json({
    error: 'Not found'
  })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`) // mensaje en consola luego de levantar el servidor
})
