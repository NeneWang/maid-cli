class FlattenTree {
    solve(root) {
      // Handle the null scenario
      if (root === null) {
        return;
      }
  
      let node = root;
  
      while (node !== null) {
        // If the node has a left child
        if (node.left !== null) {
          // Find the rightmost node
          let rightmost = node.left;
          while (rightmost.right !== null) {
            rightmost = rightmost.right;
          }
  
          // Rewire the connections
          rightmost.right = node.right;
          node.right = node.left;
          node.left = null;
        }
  
        // Move on to the right side of the tree
        node = node.right;
      }
    }
  }
  
  function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  
  module.exports = { Problem: FlattenTree, TreeNode };
  