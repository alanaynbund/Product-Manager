const Product = require('../models/product.model');

module.exports.create = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            return res.json(newProduct)
        }).catch(err => {
            return res.json(err)
        })
}

module.exports.getAll = (req, res) => {
    Product.find({})
        .then(allProducts => {
            return res.json(allProducts)
        })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.getOne = (req, res) => {
    Product.findById({ _id: req.params.id })
        .then(product => {
            return res.json(product)
        })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.deleteOne = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deletedProduct => {
            return res.json(deletedProduct)
        })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.updateOne = (req, res) => {
    Product.updateOne({ _id: req.params.id }, req.body, { runValidators: true })
        .then(updatedProduct => {
            return res.json(updatedProduct)
        })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.random = (req, res) => {
    Product.find({})
        .then(allProducts => {
            return res.json(allProducts[Math.floor(Math.random() * allProducts.length)])
        }).catch(err => {
            return res.json(err)
        })
}

const createManyProducts = async (documents) => {
    // Don't await inside a loop, it will delay iteration.
    const createPromises = documents.map((document) =>
        Product.create(document)
    );
    // The one resulting promise will be awaited by the caller of this function.
    return Promise.allSettled(createPromises);
};
module.exports.createMany = async (req, res) => {
    try {
        if (Array.isArray(req.body) === false) {
            throw new Error('The request body must be an array.')
        }
        const settledOutcomes = await createManyProducts(req.body);
        return res.json(settledOutcomes)
    } catch (error){
        return res.status(400).json(error);
    }
}