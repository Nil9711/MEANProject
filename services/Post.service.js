const mongoService = require('../connection/Mongo.service')
const ObjectId = require('mongodb').ObjectId;

function add(post) {
    return mongoService.connect()
        .then(db => db.collection('blogApp').insertOne(post))
        .then(res => {
            post._id = res.insertedId
            return post
        })
}

function remove(postId) {
    const _id = new ObjectId(postId)
    return mongoService.connect()
        .then(db => db.collection('blogApp').deleteOne({ _id }))
}

module.exports = {
    add,
    remove
}