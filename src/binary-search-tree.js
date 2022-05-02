const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

class BinarySearchTree {
  constructor() {
    this.source = null;
  }

  root() {
    return this.source;
    throw new NotImplementedError('Not implemented');
  }

  add(data) {
    this.source = addTree(this.source, data);
    function addTree(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;
      if (data < node.data) node.left = addTree(node.left, data);
      else node.right = addNode(node.right, data);
      return node;
    }
    throw new NotImplementedError('Not implemented');
  }

  has(data) {
    return searchTree(this.source, data);
    function searchTree(node, data) {
      if (node.data === data) return true;
      if (data < node.data) return searchTree(node.left, data);
      else return searchTree(node.right, data);
    }
    throw new NotImplementedError('Not implemented');
  }

  find(data) {
    return searchData(this.source, data);
    function searchData(node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      if (data < node.data) return searchData(node.left, data);
      else if(data > node.data) return searchData(node.right, data);
    }
    throw new NotImplementedError('Not implemented');
  }

  remove(data) {
      this.source = removeLNode(this.source, data);
      function removeLNode(node, data) {
        if (!node) return null;
        if (data < node.data) {
          node.left = removeLNode(node.left, data);
          return node;
        } else if ( data > node.data) {
          node.right = removeLNode(node.right, data);
          return node;
        } else {
          if (!node.left && !node.right) return null;
          if (!node.left) {
            node = node.right;
            return node;
          }
          if (!node.right) {
            node = node.left;
            return node;
          }
      }
    }
    throw new NotImplementedError('Not implemented');
  }

  min() {
    let node = this.source;
    while (node.left) node = node.left;
    return node.data;
    throw new NotImplementedError('Not implemented');
  }

  max() {
    let node = this.source;
    while (node.right) node = node.right;
    return node.data;
    throw new NotImplementedError('Not implemented');
  }
}

module.exports = {
  BinarySearchTree
};