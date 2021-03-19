import express from 'express';
import register from "./routes";
import dotenv from 'dotenv';
import {SkipbinApp} from "./types";

let PORT: number = 8000
let HOSTNAME: string = 'localhost'

dotenv.config()

if (process.env.PORT) {
    PORT = parseInt(process.env.PORT)
}
if (process.env.HOSTNAME) {
    const hs = String(process.env.HOSTNAME)
    HOSTNAME = hs.slice(-1) === '/' ? hs.substring(0, hs.length - 1) : hs
}

class App {
    // Wrapper for the application.
    port: number;
    hostname: string;
    exp: express.Application;

    constructor(){
        this.port = PORT;
        this.hostname = HOSTNAME;
        this.exp = express();

        this.exp.listen(this.port, '0.0.0.0', () => {
            console.log(`Express server started.\nHOSTNAME: ${this.hostname}\nPORT: ${this.port}`)
        })

        register(this)
    }
}

const app = new App()