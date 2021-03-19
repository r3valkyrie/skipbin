import express from 'express';
import {SkipbinApp} from "./types";

const register = (App: SkipbinApp) => {
    App.exp.get('/', (req: express.Request, res: express.Response) => {
        res.send(`${App.hostname}:${App.port}`)
    })
}

export default register;