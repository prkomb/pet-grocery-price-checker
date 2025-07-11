import express, { response } from "express";
import data from "../server.json" with { type: "json" };
import path from 'node:path'
import { fileURLToPath } from "node:url";
import { PrismaClient } from "@prisma/client";
import { getHashPassword } from "../utils/getHashPassword.js";
import bcrypt from 'bcrypt'


const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express();
const prisma = new PrismaClient()

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
  
  response.send(data);
});

app.post('/api/auth', async (request, response) => {
  const {body: {email, password}} = request

  const isUserExited = await prisma.user.findUnique({where: {email}})

  if (isUserExited) {
    return response.status(409).json({ message: "User already exists" })
  }

  const hashPassword = await getHashPassword(password)

  const user = await prisma.user.create({data: {email, passwordHash: hashPassword, role: 'USER'}})


  return response.status(200).send({msg: "User is created"})
})

app.post('/api/login', async (request, response) => {
  const {body: {email, password}} = request

  const isUserExited = await prisma.user.findUnique({where: {email}})
  
  if (!isUserExited) {
    return response.status(409).send({ message: "Can't find user with this email" })
  }


  const isPassword = await bcrypt.compare(password, isUserExited.passwordHash)

  if (!isPassword) {
    return response.status(401).json({ message: "Invalid email or password" })
  }

  return response.status(200).json({ message: "Login successful", user: {email, id, role, name: "", surname: '', phone: '', city: '', town: '', postcode: '', bio: ''  } });
})

app.post('/api/profile', async (request, response) => {
  const {body: {userId, ...profileData}} = request

  const profile = await prisma.profile.create({
    data: {
      ...profileData,         
      user: { connect: { id: userId } }  
    }
  });


  return response.status(201).json({
    message: "Profile created successfully",
    profile
  }); 
})

app.get('/api/profile/:userID', async (request, response) => {
  const {params: {userID}} = request

  const currentUserProfile = await prisma.profile.findUnique({where: {userId: parseInt(userID)}, include: {user: true}})

  if (!currentUserProfile) {
    return response.status(404).json({ message: 'User profile is not created yet' });
    
  }

  return response.status(200).json({message: "Profile fetched successfully", userProfile: currentUserProfile})

})


app.listen(3000, () => {
  console.log('Groccery app is started')
})

export default app;