const { PrismaClient } = require("@prisma/client")

const generateRandomFiveDigitNumber = () => {
  return `${Math.floor(10000 + Math.random() * 90000)}`
}

const generateRandomDateInThePastMonth = () => {
  const date = new Date()
  date.setDate(date.getDate() - Math.floor(Math.random() * 30))
  return date
}

const prisma = new PrismaClient()

async function load() {
  try {
    await prisma.order.deleteMany()
    console.log("Deleted records in the order table")

    const orders = []

    for (let i = 0; i < 360; i++) {
      const order = {
        id: generateRandomFiveDigitNumber(),
        createdAt: generateRandomDateInThePastMonth(),
        amount: Math.floor(Math.random() * 1000),
        transaction_fee: Math.floor(Math.random() * 100),
      }

      orders.push(order)
    }

    await prisma.order.createMany({
      data: orders,
    })
    console.log("Added order data")
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load()
