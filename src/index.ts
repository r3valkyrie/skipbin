import express from 'express';
import * as Routes from "./routes";
import * as Views from "./views";
import dotenv from 'dotenv';

let port: number = 8000
let hostname: string = 'localhost'
let title: string = 'Skipbin'

dotenv.config()

if (process.env.PORT) {
    port = parseInt(process.env.PORT)
}
if (process.env.HOSTNAME) {
    const hs = String(process.env.HOSTNAME)
    hostname = hs.slice(-1) === '/' ? hs.substring(0, hs.length - 1) : hs
}

if (process.env.TITLE) {
    title = String(process.env.TITLE)
}

class App {
    // Wrapper for the application.
    port: number;
    hostname: string;
    exp: express.Application;
    title: string;

    constructor() {
        this.port = port;
        this.hostname = hostname;
        this.title = title;
        this.exp = express();

        this.exp.listen(this.port, '0.0.0.0', () => {
            console.log(`Express server started.\nHOSTNAME: ${this.hostname}\nPORT: ${this.port}`)
        })

        Routes.register(this)
        Views.register(this)
    }
}

const app = new App()
