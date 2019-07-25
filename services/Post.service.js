const mongoService = require('./Mongo.Service')
const ObjectId = require('mongodb').ObjectId;

function add(post) {
    return mongoService.connect()
        .then(db => db.collection('NilApp').insertOne(post))
        .then(res => {
            post._id = res.insertedId
            return post
        })
}

function remove(postId) {
    const _id = new ObjectId(postId)
    return mongoService.connect()
        .then(db => db.collection('NilApp').deleteOne({ _id }))
}

module.exports = {
    add,
    remove
}