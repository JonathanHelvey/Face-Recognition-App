const handler = require("./handler")
// @ponicode
describe("handler.hello", () => {
    test("0", async () => {
        await handler.hello("deposit")
    })

    test("1", async () => {
        await handler.hello("invoice")
    })

    test("2", async () => {
        await handler.hello("withdrawal")
    })

    test("3", async () => {
        await handler.hello("payment")
    })

    test("4", async () => {
        await handler.hello(undefined)
    })
})
