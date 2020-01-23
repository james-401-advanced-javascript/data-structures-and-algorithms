'use strict';

const { collectNodes, returnMatches } = require('./helpers/helpers.js');

const treeIntersection = (node1, node2) => {
    if (!node1 || !node2 || node1.constructor.name !== 'Node' || node2.constructor.name !== 'Node') {
        return false;
    }
    const savedNodes = {};
    const matches = [];

    collectNodes(node1, savedNodes);
    returnMatches(node2, savedNodes, matches);

    return matches;
};

module.exports = treeIntersection;
