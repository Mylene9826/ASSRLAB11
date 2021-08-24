const express = require('express');
const app = express();
const path = require('path');
const { buscarEstudiante, getEstudiante, getEstudiantebyId } = require('./controller/estudiante.controller');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('port', process.env.PORT | 8080);
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
});
app.get('/api/estudiante/:id', getEstudiantebyId);
app.use("/api/estudiante",require("./routes/estudiante") );
app.listen(app.get('port'));
console.log(`Server on port ${app.get('port')}`)
