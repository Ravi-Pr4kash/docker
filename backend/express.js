import express from 'express'
import prisma from './prisma/lib/prisma.js'
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json())



app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.post('/user', async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({
      error: 'Username and password are required',
    })
  }

  try {
    const user = await prisma.user.create({
      data: { username, password },
    })

    res.status(201).json(user)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(8080);