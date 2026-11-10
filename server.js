
const http = require('http');

function createServer() {
    return http.createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(`
            <html>
                <head>
                    <title>Node.js Azure CI/CD</title>
                </head>
                <body>
                    <h1>Hello! My Node.js CI/CD Project is Working!</h1>
                    <p>Successfully deployed using GitHub Actions and Azure.</p>
                </body>
            </html>
        `);
    });
}

if (require.main === module) {
    const PORT = process.env.PORT || 3000;

    const server = createServer();

    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = { createServer };
