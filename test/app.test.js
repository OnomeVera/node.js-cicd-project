
const test = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');

const { createServer } = require('../server');

test('Node.js application responds successfully', async () => {
    const server = createServer();

    server.listen(0);

    await once(server, 'listening');

    try {
        const port = server.address().port;

        const response = await fetch(
            `http://127.0.0.1:${port}`
        );

        const body = await response.text();

        assert.equal(response.status, 200);

        assert.match(
            body,
            /Node.js CI\/CD Project is Working/
        );

    } finally {
        server.close();
        await once(server, 'close');
    }
});
