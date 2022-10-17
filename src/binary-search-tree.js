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
    let source = null;
    if (!this.source) return null;
    else return this.source;
    //throw new NotImplementedError('Not implemented');
  }

  add(data) {
    this.source = addNode(this.source, data);
    function addNode(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;
      if (data < node.data) node.left = addNode(node.left, data);
      else node.right = addNode(node.right, data);
      return node;
    };
    //throw new NotImplementedError('Not implemented');
  }

  
  has(data) {
    return searchNode(this.source, data);
    function searchNode(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      if (data < node.data) return searchNode(node.left, data);
      else return searchNode(node.right, data);
    }
    //throw new NotImplementedError('Not implemented');
  }

  find(data) {
    return searchData(this.source, data);
    function searchData(node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      if (data < node.data) return searchData(node.left, data);
      else if(data > node.data) return searchData(node.right, data);
    }
  }

  remove(data) {
    this.source = removeNode(this.source, data);
    function removeNode(node, data) {
      if (!node) return null;
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if ( data > node.data) {
        node.right = removeNode(node.right, data);
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

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }}

  min() {
    if (!this.source) return;
    let node = this.source;
    while (node.left) node = node.left;
    return node.data;
    //throw new NotImplementedError('Not implemented');
  }

  max() {
    if (!this.source) return;
    let node = this.source;
    while (node.right) node = node.right;
    return node.data;
    //throw new NotImplementedError('Not implemented');
  }
}

module.exports = {
  BinarySearchTree
};