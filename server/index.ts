//Server Config
import cors from 'cors';
import cookierparser from 'cookie-parser';
import express,{Application,Request,Response} from "express";
import httpServer from "http";
//Routes
import { auth, contratos, servicios } from '../routes';

class AplicationServer {
  private app: Application;
  private http: httpServer.Server;
  private port: string = process.env.PORT || "8080";

  constructor() {
    this.app = express();
    this.http = httpServer.createServer(this.app);
    this.middlewares();
    this.routes();
  }

  listen(): void {
    this.http.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  middlewares():void{
    this.app.use(cors({
      origin:['http://localhost:4200','http://localhost:8080'],
      credentials:true
    }));
    this.app.use(cookierparser(process.env.SECRET_KEY!));
  }

  routes():void{
    this.app.use('/api/int/v1/auth',auth.default);
    this.app.use('/api/int/v1/contratos',contratos.default);
    this.app.use('/api/int/v1/servicios',servicios.default);
  }
}

export default AplicationServer;
