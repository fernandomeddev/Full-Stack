const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json());
app.use(cors());

const db = require('./models')

//Rotas
const taskRouter = require('./routes/Tasks')
app.use("/tasks", taskRouter);

db.sequelize.sync().then(()=>{ 
    app.listen(3001,()=>{
        console.log('server running on port 3001');
    });
});