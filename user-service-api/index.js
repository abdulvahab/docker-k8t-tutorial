const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([{
      "user": "Abdulvahab",
      "message":'Hello Dolo!'
  },
  {
      "user":"Musarratbanu",
      "message":"Hello Musu!"
  },
  {
    "user":"Abdulrehman",
    "message":"Hello Baba!"
},
{
    "user":"Fatema",
    "message":"Hello Saljan!"
}

])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})