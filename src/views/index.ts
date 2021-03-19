import {Wrapper} from "../types";

// Register our views.
export const register = ({exp}: Wrapper) => {
    exp.set('views', __dirname)
    exp.set('view engine', 'ejs');
}