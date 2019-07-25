var dbConn = null;

function connectToMongo() {
    if (dbConn) return Promise.resolve(dbConn);
    const MongoClient = require('mongodb').MongoClient;
    
    const url = "mongodb+srv://maor:1234@cluster0-dpwkr.mongodb.net/tirgul?retryWrites=true&w=majority";
    
    return MongoClient.connect(url,  { useNewUrlParser: true })
        .then(client => {
            console.log('Connected to MongoDB');
            client.on('close', ()=>{
                console.log('MongoDB Diconnected!');
                dbConn = null;
            })
            dbConn = client.db()
            return dbConn;
        })
}
module.exports = {
    connect : connectToMongo
}