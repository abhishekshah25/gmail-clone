import express from 'express';
import { saveSentEmails, getEmails, toggleStarredEmail, deleteEmails, moveEmailsToBin } from '../controller/email-controller.js';

const routes = express.Router();

routes.post('/save', saveSentEmails);
routes.get('/emails/:type', getEmails);
routes.post('/save-draft', saveSentEmails);
routes.post('/starred', toggleStarredEmail);
routes.delete('/delete', deleteEmails);
routes.post('/bin', moveEmailsToBin);

export default routes;