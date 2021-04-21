import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import path from 'path'
import imagenRoutes from './routes/imagen'

const app = express();
import './config/connection'


//configuraciones
app.set('port', 3000 || process.env.PORT);

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use(imagenRoutes)

//Archivos estaticos
app.use(express.static(path.join(__dirname, '/public')));

//Servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor iniciado en el puerto ${app.get('port')}`);
});