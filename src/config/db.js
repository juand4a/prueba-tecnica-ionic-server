const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('tasksdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306, // Aquí se especifica el puerto
  logging: console.log,
});

sequelize
.authenticate()
.then(()=>{
    console.log("Conexion a la base de datos establecida")
})
.catch(err =>{
    console.log("No se pudo establecer conexion  a la base de datos",err);
    
})
module.exports=sequelize