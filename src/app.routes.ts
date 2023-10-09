import express, { Application } from 'express';

import { router as RouterMedic } from './modules/medic/infraestructure/medic.routes';
import { Errors } from './helpers/error.helper';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/medics', RouterMedic);

app.use(Errors.pathNotFound);

export default app;
