import express, { response } from "express";
import data from "../scrappers/results/products.json" with { type: "json" };
import shops from './../scrappers/results/shops.json' with { type: 'json' };
import discounts from './../scrappers/results/discounts.json' with {type: 'json'} 
import path from 'node:path';
import { fileURLToPath } from "node:url";
import { PrismaClient } from "@prisma/client";
import { getHashPassword } from "../utils/getHashPassword.js";
import { checkEnvironment } from "../utils/checkEnvironment.js";
import userRouter from "./user.js"
import profileRouter from './profile.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))


try {
  checkEnvironment();
} catch (error) {
  console.error('Environment check failed:', error.message);
}

const app = express();

// Инициализация Prisma с обработкой ошибок
let prisma;
try {
  prisma = new PrismaClient();
} catch (error) {
  console.error('Failed to initialize Prisma Client:', error);
}

app.use(express.json());
app.set('views', path.join(__dirname, '..' ,'views'))
app.set('view engine', 'ejs');
app.use(userRouter)
app.use(profileRouter)

// Middleware для обработки ошибок
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.get('/api', (request, response) => {
  try {
    response.render('index', { 
      title: 'Home Page', 
      price: 23.99, 
      count: data?.length * 5 || 0,
      shopsList: shops
    })
  } catch (error) {
    console.error('Error rendering index:', error);
    response.status(500).json({ error: 'Failed to render page' });
  }
})

app.get("/api/products", (request, response) => {
  try {
    response.send(data);
  } catch (error) {
    console.error('Error fetching products:', error);
    response.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.get('/api/discounts', (request, response) => {
  try {
    response.status(200).send(discounts)
  } catch (error) {
    console.error('Error fetching discounts:', error);
    response.status(500).json({ error: 'Failed to fetch discounts' });
  }
})

// Graceful shutdown для Prisma
process.on('beforeExit', async () => {
  if (prisma) {
    await prisma.$disconnect();
  }
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => {
    console.log('Grocery app is started')
  })
}

export default app;