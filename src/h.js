// React.createElement
const h = (tag, data = {}, children = []) => {
    return {tag, data, children}
}

module.exports = h