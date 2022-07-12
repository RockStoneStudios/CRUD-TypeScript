import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { UserRouter } from './router/user.router.js';

const app = express()

class Server {
    // atributos
     public app : express.Application = express();
     private port : Number = 3001
    // constructor
      constructor() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended : true}));
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use('/api',this.routers())
        this.listen();
      }
    //Metodos
     routers():Array<express.Router> {
       return [new UserRouter().router]
     }


    public listen(){
        this.app.listen(this.port,()=>{
            console.log("Starting Server on Port . . . => "+this.port);
        });
    }
}

const server = new Server();



// Instancias de clase = Objetos
