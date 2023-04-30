const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.addProduct = async (req, res) => {
    const { name, price } = req.body;
    const product = await prisma.product.create({
        data: {
            name, price
        }
    })
    res.json(product);
}

exports.getProduct = async (req, res) => {
    const allProduct = await prisma.product.findMany();
    res.json(allProduct);
}

exports.updateProduct = async (req, res) => {
    const product = await prisma.product.update({
        where: {
            id: req.body.id
        },
        data: {
            name: req.body.name,
            price: req.body.price
        }
    })
    res.json(product);
}

exports.removeProduct = async (req, res) => {
    const product = await prisma.product.delete({
        where: {
            id: req.body.id
        }
    })
    res.json(product);
}