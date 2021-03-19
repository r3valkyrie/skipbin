import {Wrapper} from "../types";
import express from 'express';
import path from 'path';

// Register our views.
export const register = ({exp}: Wrapper) => {
    exp.set('views', __dirname)
    exp.set('view engine', 'ejs');
    exp.use(express.static(path.join(__dirname, '../build/')))
}