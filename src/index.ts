import  dotenv from "dotenv";
import Server from "./server";



//Configuracion del dotenv
dotenv.config();

//instancia del server
export const server = new Server();

//intenta correr el servidor
server.listen();