const express = require('express')
const app = express()
app.use(express.static('./html'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const sqlite = require('./conexao.js')
/*
app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html')
})
*/

app.post('/candidato', function(req, res){
  console.log("chegou")
  const sql = 'select * from candidato'
  sqlite.db.all(
      sql,
      (error, rows) => {
          if (error) {
              throw Error(error.message)
          }

          const data = rows.map((cand) => {
              return {

                   id: cand.id,
                   cargo: cand.cargo,
                  tipo: cand.tipo,
                  status: cand.status,
                  nome: cand.nome,
               
              }
          })

          const json = JSON.stringify(data)
          res.send(json)
          
          
      }
  )


      
   


    

})

   app.post('/estaduais', function (req, res){
        
        const sql = 'select * from candidato where cargo = 7'
        sqlite.db.all(
        sql,
      (error, rows) => {
          if (error) {
              throw Error(error.message)
          }

          const data = rows.map((cand) => {
              return {

                   id: cand.id,
                   cargo: cand.cargo,
                   tipo: cand.tipo,
                   status: cand.status,
                   nome: cand.nome,
               
              }
          })

          const json = JSON.stringify(data)
          res.send(json)
          console.log(json)
          
      }
  )


  })

      app.post('/federais', function (req, res){
        
      const sql = 'select candidato.id, candidato.cargo, candidato.tipo, candidato.status, candidato.nome from candidato where cargo = 6'
        sqlite.db.all(
        sql,
      (error, rows) => {
          if (error) {
              throw Error(error.message)
          }

          const data = rows.map((cand) => {
              return {

                   id: cand.id,
                   cargo: cand.cargo,
                   tipo: cand.tipo,
                   status: cand.status,
                   nome: cand.nome,
               
              }
          })

          const json = JSON.stringify(data)
          res.send(json)
         
          
      }
  )


  })

        app.post('/senador', function (req, res){
        console.log("chegou")
        const sql = 'select * from candidato where cargo = 5'
        sqlite.db.all(
        sql,
      (error, rows) => {
          if (error) {
              throw Error(error.message)
          }

          const data = rows.map((cand) => {
              return {

                   id: cand.id,
                   cargo: cand.cargo,
                   tipo: cand.tipo,
                   status: cand.status,
                   nome: cand.nome,
               
              }
          })

          const json = JSON.stringify(data)
          res.send(json)
          
         
          
      }
  )


  })



    app.post('/governador', function (req, res){
        console.log("chegou")
        const sql = 'select * from candidato where cargo = 3'
        sqlite.db.all(
        sql,
      (error, rows) => {
          if (error) {
              throw Error(error.message)
          }

          const data = rows.map((cand) => {
              return {

                   id: cand.id,
                   cargo: cand.cargo,
                   tipo: cand.tipo,
                   status: cand.status,
                   nome: cand.nome,
               
              }
          })

          const json = JSON.stringify(data)
          res.send(json)
          console.log(json)
         
          
      }
  )


  })
    app.post('/presidente', function (req, res){
        console.log("chegou")
        const sql = 'select * from candidato where cargo = 1'
        sqlite.db.all(
        sql,
      (error, rows) => {
          if (error) {
              throw Error(error.message)
          }

          const data = rows.map((cand) => {
              return {

                   id: cand.id,
                   cargo: cand.cargo,
                   tipo: cand.tipo,
                   status: cand.status,
                   nome: cand.nome,
               
              }
          })

          const json = JSON.stringify(data)
          res.send(json)
          console.log(json)
         
          
      }
  )


  })

app.post('/city', function (req, res){

    const sql = "select * from municipio"
          sqlite.db.all(
        sql,
      (error, rows) => {
          if (error) {
              throw Error(error.message)
          }

          const data = rows.map((muni) => {
              return {

                   id: muni.id,
                   nome: muni.nome,
                   uespi: muni.uespi
               
              }
          })

          const json = JSON.stringify(data)
          res.send(json)
          console.log(json)
         
          
      }
  )


})


app.post('/resultfinal', function (req, res){
    
    const sql = 'select * from candidato where candidato.status = 1'
    sqlite.db.all(
        sql,
      (error, rows) => {
          if (error) {
              throw Error(error.message)
          }

          const data = rows.map((cand) => {
              return {
                   nome: cand.nome,
                   cargo: cand.cargo,
                   status: cand.status
               
              }
          })

          const json = JSON.stringify(data)
          res.send(json)
          console.log(json)
         
          
      }
  )



})








app.listen(8000, function () {
    console.log('Server listenning localhost:8000')
})


