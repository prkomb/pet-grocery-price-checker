import express, { response } from "express";
import data from "./server.json" with { type: "json" };
import path from 'node:path'
import { fileURLToPath } from "node:url";
// import {getFormattedRoutes} from './utils/getFormattedRoutes.js'


const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express();

app.use(express.json());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.get('/api', (request, response) => {
  response.render('index', { 
    title: 'Home Page', 
    price: 23.99, 
    count: data?.length || 0,
  })
})

app.get("/api/products", (request, response) => {
  // app._router.stack
  


  response.send(data);
});

app.get('/api/products', (request, response) => {
  
})




export default app;