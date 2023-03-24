import express, {Application} from "express";
import cors from 'cors'
import { mongoConnection } from "./db/config";
import authRoutes from "./routers/auth";
import pokemonRoutes from "./routers/pokemons";
import  path  from "path";
class Server {

    private app:Application;
    private port:string;
    private apiPaths ={
        auth:"/api/auth",
        pokemon:"/api/pokemon"
  
    }

    constructor (){
    //constructor del servidor express
    this.app = express();
    //puerto de conexion
    this.port = process.env.PORT  || '8080';
    //database 
     this.dbConnection();
    // Definicion de middlewares
    this.middlewares();

    this.routes();
    }

    async dbConnection() {
    try {
        
        await mongoConnection();
    
     
    } catch (err:any) {
        console.log( err );
    } 
    };


    middlewares() {
    //CORS
    this.app.use(cors());
    // Lectra del body
    this.app.use(express.json());
      // Carpeta publica
      this.app.use(express.static('public'));
   
    }
 
    routes() {
     this.app.use(this.apiPaths.auth,authRoutes);
     this.app.use(this.apiPaths.pokemon,pokemonRoutes);
    
    }

    
    
    listen() {
    //la app selecciona el puerto asignado y empieza a correr el servidor

    this.app.listen(this.port,()=>{
        console.log('Servidor corriendo en el puerto ' + this.port);
    })
    }



}
export default Server;