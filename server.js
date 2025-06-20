const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url ==="/todos" && req.method === "GET"){
        
    res.end('All Todos');
    }
    else if(req.url ==="/todos/create-todos" && req.method === "POST"){
        res.end('Create Todos');
    }else(
        res.end('Not Found')
    )

})

server.listen(5000, '127.0.0.1', () => {
    console.log('Server is running on port 5000');
})






