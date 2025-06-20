const http = require('http');

const path = require('path');

const fs = require('fs');
const filepath = path.join(__dirname, './db/todo.json')

const server = http.createServer((req, res) => {

    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;


    // get all todos
    if (pathname === "/todos" && req.method === "GET") {
        const data = fs.readFileSync(filepath, { encoding: "utf-8" })
        res.writeHead(200, {
            "content-type": "application/json"
        })

        res.end(data);
    }
    // Post todo
    else if (pathname === "/todos/create-todos" && req.method === "POST") {
        let data = "";
        req.on("data", (chunk) => {
            data = data + chunk;
        })
        req.on("end", () => {
            const { title, body } = JSON.parse(data);

            const createdAt = new Date().toLocaleString();
            const allTodos = fs.readFileSync(filepath, { encoding: "utf-8" })
            const parsedTodos = JSON.parse(allTodos);
            parsedTodos.push({ title, body, createdAt });
            fs.writeFileSync(filepath, JSON.stringify(parsedTodos), { encoding: "utf-8" })
            res.end(JSON.stringify({ title, body, createdAt }));
        })
        res.end('Create Todos');
    }

    // single todo
    else if (pathname === '/todo' && req.method === "GET") {

        const title = url.searchParams.get('title');
        console.log(title, 'title')


        const data = fs.readFileSync(filepath, { encoding: "utf-8" })
        const parsedTodos = JSON.parse(data);

        const todo = parsedTodos.find((todo) => todo.title === title);
        if (!todo) {
            res.writeHead(404, {
                "content-type": "application/json"
            })
            return res.end(JSON.stringify({ message: "Todo not found" }));
        }


        res.end('single todo');
    }

    // update todo
    else if (pathname === "/todos/update-todos" && req.method === "PATCH") {

        const title = url.searchParams.get('title');

        let data = "";
        req.on("data", (chunk) => {
            data = data + chunk;
        })
        req.on("end", () => {
            const {  body } = JSON.parse(data);

            const allTodos = fs.readFileSync(filepath, { encoding: "utf-8" })
            const parsedTodos = JSON.parse(allTodos);
            const todoIndex=parsedTodos.findIndex((todo) => todo.title === title);
            parsedTodos[todoIndex].body = body;
            fs.writeFileSync(filepath, JSON.stringify(parsedTodos), { encoding: "utf-8" })
            res.end(JSON.stringify({ title, body, createdAt:parsedTodos[todoIndex].createdAt }));
        })
        res.end('Update Todos');
    }

    else (
        res.end('Not Found')
    )

})

server.listen(5000, '127.0.0.1', () => {
    console.log('Server is running on port 5000');
})






