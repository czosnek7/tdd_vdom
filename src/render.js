const patch = require('./patch')

const renderer = () => {
    let element = null
    let oldVirtualNode = null

    const render = newVirtualNode => {
        const patchedElement =  patch({parent: document.body, element, oldVirtualNode, newVirtualNode})
        element = patchedElement
        oldVirtualNode = newVirtualNode
        return patchedElement
    }

    return render
}

module.exports = renderer