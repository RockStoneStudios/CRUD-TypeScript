import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { UserRouter } from './user/user.router.js';
import {  DataSource } from 'typeorm';
import {ConfigServer} from './config/config'
import {AppDataSource} from './config/data.source';
const app = express()

class Server extends ConfigServer {
    // atributos
     public app : express.Application = express();
     private port : Number = 3000
    // constructor
      constructor() {
        super();
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended : true}));
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.dbConnect();
        this.app.use('/api',this.routers())
        this.listen();
      }
    //Metodos
     routers():Array<express.Router> {
       return [new UserRouter().router]
     }

      async dbConnect() : Promise<DataSource | void>   {
        return this.initConnect.then(()=>{
           console.log('Connect Success');
        }).catch((error)=>{
           console.log(error);
        })
      }

    public listen(){
        this.app.listen(this.port,()=>{
            console.log("Starting Server on Port . . . => "+this.port);
        });
    }
}

const server = new Server();



// Instancias de clase = Objetos
