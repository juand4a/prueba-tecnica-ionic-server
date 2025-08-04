const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(bodyParser.json({ limit: "300mb" }))
app.use(bodyParser.urlencoded({ limit: "300mb", extended: true }))
app.use(cors({
  origin: '*' 
}));

const apiRouter = express.Router()
apiRouter.use("/task", require("./routes/TaskRoutes"))
app.use("/api", apiRouter)

if (require.main === module) {
  const PORT = 3000
  app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en puerto ${PORT}`)
  })
}

module.exports = app
