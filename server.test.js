
const test = require("node:test");
const assert = require("node:assert");
const app = require("./server");

test("Application starts and responds to health checks", async () => {
    const server = app.listen(0);

    try {
        const port = server.address().port;

        const response = await fetch(
            `http://127.0.0.1:${port}/health`
        );

        assert.strictEqual(response.status, 200);

        const data = await response.json();

        assert.strictEqual(data.status, "healthy");
        assert.strictEqual(
            data.application,
            "devops-nodejs-cicd"
        );
    } finally {
        await new Promise((resolve) => server.close(resolve));
    }
});
