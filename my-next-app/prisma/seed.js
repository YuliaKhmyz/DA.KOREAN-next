const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')

async function main() {
    const users = [
        { name: 'Dasha', email: '1@mail.ru', password: '123', isAdmin: true },
        { name: 'Yulia', email: 'xmyza@mail.ru', password: '123', isAdmin: false }
    ]

    for (const user of users) {
        await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: await bcrypt.hash(user.password, 10),
                isAdmin: user.isAdmin
            }
        })
    }
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
