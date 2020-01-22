const collectNodes = (node, obj) => {
    if (!node.value) {
        return;
    }
    obj[node.value] ? obj[node.value]++ :  obj[node.value] = 1;

    if (node.left)  collectNodes(node.left, obj);
    if (node.right)  collectNodes(node.right, obj);
};

const returnMatches = (node, obj, arr) => {
    if (!node.value) {
        return;
    }

    if (obj[node.value]) arr.push(node.value);

    if (node.left)  returnMatches(node.left, obj, arr);
    if (node.right)  returnMatches(node.right, obj, arr);
};

module.exports = { collectNodes, returnMatches };