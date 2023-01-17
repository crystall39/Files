const http = require('http');

const server = http.createServer((req, res) => 
{
    if (req.url === '/')
    {
        res.write("Hello world");
        res.write("\nHow are you doing today?");
    }

    if (req.url === '/api/courses')
    {
        res.write(JSON.stringify([1, 2, 3]));
        res.write ("\nThis is a list of offerings");
        res.write(" at BTHS")
    }

    res.end();
})

server.listen(3000);
console.log("Listening on port 3000 ...")