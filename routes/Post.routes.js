const postService = require('../services/Post.service');

function postRoutes(app){
    
    app.get('/post', async (req, res) => {
        var filter = req.query.filter
        var msgs = await postService.query(filter)
        res.json(msgs)
    })

    app.post('/post', async (req,res)=> {
        var post = req.body;
        const addedMsg = await postService.add(post)
        res.json(addedMsg)
    })
    
    app.delete('/post/:postId', async (req,res)=> {
        const postId = req.params.msgId;
        const deletedPost = await postService.remove(postId)
        res.json(deletedPost)  
    })
}

module.exports = postRoutes;