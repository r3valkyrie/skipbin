import express from 'express';
import * as Routes from "./routes";
import * as Views from "./views";
import dotenv from 'dotenv';
import path from "path";
import browserSync from 'browser-sync';

dotenv.config()

const port = parseInt(process.env.PORT as string) || 8000
const hostname = process.env.HOSTNAME || 'localhost'
const title = process.env.TITLE || 'Skipbin'

// Check if we're in a production environment.
const isProduction = process.env.NODE_ENV === 'production'

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

        // Register the path for static assets.
        this.exp.use(express.static(path.join(__dirname, '../public/')))

        // Register our routes and views
        Routes.register(this)
        Views.register(this)

        // Start browsersync if we're in development mode.
        if (!isProduction) {
            browserSync({
                files: ['**/*'],
                port: port + 1,
                proxy: `${this.hostname}:${this.port}`
            })
        }
    }
}

const app = new App()
