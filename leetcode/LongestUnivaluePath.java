/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 1 node
 0 node
 skewed binary tree
 longest path doesn't pass through root
 pass through root
 
 */
class Solution {
    public int longestUnivaluePath(TreeNode root) {
        if (root == null) return 0;
        long[] longestPathVal = {0};
        getLongestUnivaluePath(root, longestPathVal);
        return (int)longestPathVal[0];
    }
    
    long getLongestUnivaluePath(TreeNode root, long[] longestPathVal)
    {
        if (root == null) return 0;

        long leftmax = getLongestUnivaluePath(root.left, longestPathVal);
        long rightmax= getLongestUnivaluePath(root.right, longestPathVal);

        long leftSide = 0, rightSide = 0;
        if(root.left != null && root.left.val == root.val)
        {
            leftSide = leftmax+1;
        }

        if(root.right!=null && root.right.val == root.val)
        {
            rightSide = rightmax+1;
        }
        
        longestPathVal[0] = Math.max(leftSide + rightSide, longestPathVal[0]);
        return Math.max(leftSide, rightSide);
    }
}