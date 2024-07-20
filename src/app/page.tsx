import { PrismaClient } from '@prisma/client'
import Tools from './Tools'

const HomePage = async () => {
  const prisma = new PrismaClient()

  const technologies = await prisma.technologies.findMany()

  console.log(technologies)

  return (
    <main>
      <h1>Hello, here are the technologies:</h1>
      <Tools technologies={technologies} />
    </main>
  )
}

export default HomePage
