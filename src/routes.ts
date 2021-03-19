import {Request, Response} from 'express';
import {Wrapper} from "./types";

// Register our routing rules.
export const register = (App: Wrapper) => {
    const {exp} = App
    exp.get('/', (req: Request, res: Response) =>
        res.render('index', {title: App.title}))
}
