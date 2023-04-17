const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {
  constructor () {
    this.treeRoot = null;
  }
  root() {
    return this.treeRoot;
    // remove line with error and write your code here
  }

  add(data) {
    return this.treeRoot = addInside(this.treeRoot, data);
    function addInside(node,data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (node.data > data ) {
        node.left = addInside(node.left, data);
      }else {
        node.right = addInside(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return checkInside(this.treeRoot, data);

    function checkInside(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }

      if ( node.data > data) {
        return checkInside(node.left, data);
      }else {
        return checkInside(node.right, data);
      }
    }
    
  }

  find(data) {
    return searchInside(this.treeRoot, data);

    function searchInside(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }

      if ( node.data > data) {
        return searchInside(node.left, data);
      }else {
        return searchInside(node.right, data);
      }
    }
  }

  remove(data) {
    this.treeRoot = removeInside(this.treeRoot, data);

    function removeInside(node, data) {
      if (!node) {
        return null;
      }
      if (node.data > data  ) {
        node.left = removeInside(node.left, data);
        return node;
      }else if (node.data < data) {// data > node.data
        node.right = removeInside(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if ( !node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let fromRightMin = node.right;
        while (fromRightMin.left) {
          fromRightMin = fromRightMin.left;
        } 
        node.data = fromRightMin.data;
        node.right = removeInside(node.right, fromRightMin.data);
        return node;
      }
    }
  }


  min() {
    if (!this.root) {
      return;
    }
    let node = this.treeRoot;
    while (node.left && node.left != null) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root) {
      return
    }
    let node = this.treeRoot;
    while (node.right && node.right != null) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};