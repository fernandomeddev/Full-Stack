const express = require('express')
const app = express()
app.use(express.json());

const db = require('./models')

//Rotas
const taskRouter = require('./routes/Tasks')
app.use("/tasks", taskRouter);

db.sequelize.sync().then(()=>{ 
    app.listen(3001,()=>{
        console.log('server running on port 3001');
    });
});