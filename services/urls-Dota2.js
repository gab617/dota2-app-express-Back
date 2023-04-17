const dataHeros = require('./dataHeros.dota2.json')
const detailHeros = require('./herosDetail')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args)) // Solucion para importar nodefetch solo con require

// RETORNA TODOS LOS PERSONAJES EN LISTA DE HEROES(la lista esta definida en el mismo servidor, pero se podria pedir mediante un fetch a la api que lo posee.)
const getDataDota2Api = (request, response, next) => {
  response.json(dataHeros)
}

const getHeroDataApi = (request, response) => {
  const id = +request.params.id
  const found = detailHeros.find(hero => hero.id === id)
  console.log(found, 'FOUND')
  response.json(found)
}

const getApiExternaDataHeros = (req, res) => {
  const id = +req.params.id
  console.log(id, 'Solicitado desde front')
  const url = `https://dota2-heroes.p.rapidapi.com/heroes/english/${id}`

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'miapikey', // se requiere apikey para acceder a todos los datos, sino hay datos para probar en herosDetail.js
      'X-RapidAPI-Host': 'dota2-heroes.p.rapidapi.com'
    }
  }

  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      console.log(json, 'RESPUESTAAAA')
      res.json(json)
    })
    .catch(err => console.error('error:' + err))
}

module.exports = {
  getDataDota2Api,
  getHeroDataApi,
  getApiExternaDataHeros
}
