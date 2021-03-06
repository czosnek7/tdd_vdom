const test = require("tape")
const h = require("../src/h")
const renderer = require("../src/render")
require("jsdom-global")()

test("complex example", t => {
    document.body.innerHTML = ""
    const render = renderer()
    render(
        h("div", {class: "outer"}, [h("div", {class: "inner"}, ["text"])])
    )

    t.strictEqual(
        document.body.innerHTML,
        '<div class="outer"><div class="inner">text</div></div>'
    )
    t.end()
})

test("repeated render", t => {
    // given
    document.body.innerHTML = ""
    const render = renderer()

    // when
    render(
        h("div", {class: "outer"}, [h("div", {class: "inner"}, ["before"])])
    )
    render(
        h("div", {class: "outer"}, [h("div", {class: "inner"}, ["after"])])
    )

    // then
    t.strictEqual(
        document.body.innerHTML,
        '<div class="outer"><div class="inner">after</div></div>'
    )
    t.end()
})