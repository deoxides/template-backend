//Server Config
import path from 'path';
import cors from 'cors';
import cookierparser from 'cookie-parser';
import session from 'express-session';
import express,{Application,Request,Response} from "express";
import httpServer from "http";
//Routes
import { auth, contratos } from '../routes';

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
    this.app.use(session({
      secret:process.env.SECRET_KEY!,

      resave:false,
      saveUninitialized:true,
      cookie: { 
        domain:'http://localhost',
        secure: true 
      }
    }))
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname,'../public')));
  }

  routes():void{
    this.app.use('/api/int/v1/auth',auth.default);
    this.app.use('/api/int/v1/contratos',contratos.default);
    //Angular Routes
    this.app.get('*',(req:Request,res:Response) => {
      res.sendFile(path.resolve(__dirname,'../public/index.html'))
  })
  }
}

export default AplicationServer;
