const assert = require('assert');
const ProblemTests = require('./problem-test');
const { arrayToListNode, arrayToBinaryTree, TreeNode } = require('./utils');


class HIndex extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        const hIndex = new this.Problem();
        this.current_test_name = '[0,1,3,5,6] | 3';
        assert.equal(hIndex.solve([0, 1, 3, 5, 6]), 3);
    }

    test_2() {
        const hIndex = new this.Problem();
        this.current_test_name = '[100, 100] | 2';
        assert.equal(hIndex.solve([100, 100]), 2);
    }

    test_3() {
        const hIndex = new this.Problem();
        this.current_test_name = '[0, 0, 0, 0, 0] | 0';
        assert.equal(hIndex.solve([0, 0, 0, 0, 0]), 0);
    }
}

class InsertDeleteGetRandomO1 extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        // this.tests.push(() => this.test_2());
        // this.tests.push(() => this.test_3());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]\n[[],[1],[2],[2],[],[1],[2],[]] | [null,true,false,true,2,true,false,2]';

        assert.equal(structure.RandomizedSet(), null);
        assert.equal(structure.insert(1), true);
        assert.equal(structure.remove(2), false);
        assert.equal(structure.insert(2), true);
        assert.equal(structure.remove(1), true);
        assert.equal(structure.RandomizedSet(), 2);
        assert.equal(structure.insert(2), false);
        assert.equal(structure.RandomizedSet(), 2);

    }


}

class MinimumSizeSubArraySum extends ProblemTests {
    constructor(problem) {
        super(problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[2,3,1,2,4,3] | 7 => 2';
        assert.equal(structure.solve(7, [2, 3, 1, 2, 4, 3]), 2);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[1,4,4] | 4 => 1';
        assert.equal(structure.solve(4, [1, 4, 4]), 1);
    }

    test_3() {
        const structure = new this.Problem();
        this.current_test_name = '[1,1,1,1,1,1,1,1] | 11 => 0';
        assert.equal(structure.solve(11, [1, 1, 1, 1, 1, 1, 1, 1]), 0);
    }


}

class GameOfLife extends ProblemTests {
    constructor(problem) {
        super(problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        // Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
        // Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

        const structure = new this.Problem();
        this.current_test_name = '[[0,1,0],[0,0,1],[1,1,1],[0,0,0]] | [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]';
        const board = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]
        structure.solve(board)
        assert.deepEqual(board, [[0, 0, 0], [1, 0, 1], [0, 1, 1], [0, 1, 0]]);


    }

    test_2() {
        // Input: const board = [[1,1],[1,0]]
        // Output: [[1,1],[1,1]]

        const structure = new this.Problem();
        this.current_test_name = '[[1,1],[1,0]] | [[1,1],[1,1]]';
        const board = [[1, 1], [1, 0]]
        structure.solve(board)
        assert.deepEqual(board, [[1, 1], [1, 1]]);
    }

}

class WordPattern extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = 'abba | dog cat cat dog => true';
        assert.equal(structure.solve('abba', 'dog cat cat dog'), true);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = 'abba | dog cat cat fish => false';
        assert.equal(structure.solve('abba', 'dog cat cat fish'), false);
    }

    test_3() {
        const structure = new this.Problem();
        this.current_test_name = 'aaaa | dog cat cat dog => false';
        assert.equal(structure.solve('aaaa', 'dog cat cat dog'), false);
    }
}


class ContainsDuplicateII extends ProblemTests {

    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }


    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[1,2,3,1] | 3 => true';
        assert.equal(structure.solve([1, 2, 3, 1], 3), true);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[1,0,1,1] | 1 => true';
        assert.equal(structure.solve([1, 0, 1, 1], 1), true);
    }

    test_3() {
        const structure = new this.Problem();
        this.current_test_name = '[1,2,3,1,2,3] | 2 => false';
        assert.equal(structure.solve([1, 2, 3, 1, 2, 3], 2), false);
    }
}

class SummaryRanges extends ProblemTests {

    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }


    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[0,1,2,4,5,7] => ["0->2","4->5","7"]';
        assert.deepEqual(structure.solve([0, 1, 2, 4, 5, 7]), ["0->2", "4->5", "7"]);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[0,2,3,4,6,8,9] => ["0","2->4","6","8->9"]';
        assert.deepEqual(structure.solve([0, 2, 3, 4, 6, 8, 9]), ["0", "2->4", "6", "8->9"]);
    }

    test_3() {
        const structure = new this.Problem();
        this.current_test_name = '[] => []';
        assert.deepEqual(structure.solve([]), []);
    }


}


class MinimumNumberOfArrowsToBurstBalloons extends ProblemTests {

    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[[10,16],[2,8],[1,6],[7,12]] => 2';
        assert.equal(structure.solve([[10, 16], [2, 8], [1, 6], [7, 12]]), 2);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[[1,2],[3,4],[5,6],[7,8]] => 4';
        assert.equal(structure.solve([[1, 2], [3, 4], [5, 6], [7, 8]]), 4);
    }

    test_3() {

        const structure = new this.Problem();
        this.current_test_name = '[[1,2],[2,3],[3,4],[4,5]] => 2';
        assert.equal(structure.solve([[1, 2], [2, 3], [3, 4], [4, 5]]), 2);
    }

}






class PartitionList extends ProblemTests {

    constructor(Problem) {
        super(Problem);

        this.tests.push(() => this.test_1());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[1,4,3,2,5,2] | 3 => [1,2,2,4,3,5]';
        assert.deepEqual(structure.solve(arrayToListNode([1, 4, 3, 2, 5, 2]), 3), arrayToListNode([1, 2, 2, 4, 3, 5]));
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[2,1] | 2 => [1,2]';
        assert.deepEqual(structure.solve(arrayToListNode([2, 1]), 2), arrayToListNode([1, 2]));
    }


}


class SymmetricTree extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[1,2,2,3,4,4,3] => true';
        assert.equal(structure.solve(arrayToBinaryTree([1, 2, 2, 3, 4, 4, 3])), true);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[1,2,2,null,3,null,3] => false';
        assert.equal(structure.solve(arrayToBinaryTree([1, 2, 2, null, 3, null, 3])), false);
    }
}


class ConstructBinaryTreeFromInorderAndPostorderTraversal extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[9,3,15,20,7] | [9,15,7,20,3] => [3,9,20,null,null,15,7]';
        const root = structure.buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])

        assert.deepEqual(root, arrayToBinaryTree([3, 9, 20, null, null, 15, 7]));
        // assert.deepEqual(structure.solve([9,3,15,20,7], [9,15,7,20,3]), arrayToBinaryTree([3,9,20,null,null,15,7]));
    }


    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[-1] | [-1] => [-1]';
        const root = structure.buildTree([-1], [-1])

        assert.deepEqual(root, arrayToBinaryTree([-1]));
        // assert.deepEqual(structure.solve([9,3,15,20,7], [9,15,7,20,3]), arrayToBinaryTree([3,9,20,null,null,15,7]));
    }
}


class PopulatingNextRightPointersInEachNode extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_2());
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[] => []';
        const root = structure.connect(arrayToBinaryTree([]))

        assert.deepEqual(root, arrayToBinaryTree([]));
    }

}

class FlattenBinaryTreeToLinkedList extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        const structure = new this.Problem();
        this.current_test_name = '[1,2,5,3,4,null,6] => ';
        /**
         * TreeNode {
            left: null,
            right: TreeNode {
                left: null,
                right: TreeNode {
                left: TreeNode {
                    left: TreeNode {
                    left: TreeNode {
                        left: null,
                        right: null,
                        val: 6
                    },
                    right: null,
                    val: 5
                    },
                    right: null,
                    val: 4
                },
                right: null,
                val: 3
                },
                val: 2
            },
            val: 1
            }
         */

        const entry = arrayToBinaryTree([1, 2, 5, 3, 4, null, 6])
        const root = structure.solve(entry)
        const expectedSolution = new TreeNode(1, null,
            new TreeNode(2, null,
                new TreeNode(3, null,
                    new TreeNode(4, null,
                        new TreeNode(5, null,
                            new TreeNode(6))))));

        assert.deepEqual(entry, expectedSolution);
    }

    test_2() {
        const structure = new this.Problem();
        this.current_test_name = '[] => []';
        const root = structure.solve(arrayToBinaryTree([]))
    }

    test_3(){
        const structure = new this.Problem();
        this.current_test_name = '[0] => [0]';
        const root = structure.solve(arrayToBinaryTree([0]))
    }
}



const TEST_DICTIONARY = {
    'h-index': HIndex,
    'insert-delete-getrandom-o1': InsertDeleteGetRandomO1,
    'minimum-size-subarray-sum': MinimumSizeSubArraySum,
    'game-of-life': GameOfLife,
    'word-pattern': WordPattern,
    'contains-duplicate-ii': ContainsDuplicateII,
    'summary-ranges': SummaryRanges,
    'minimum-number-of-arrows-to-burst-balloons': MinimumNumberOfArrowsToBurstBalloons,
    'partition-list': PartitionList,
    'symmetric-tree': SymmetricTree,
    'construct-binary-tree-from-inorder-and-postorder-traversal': ConstructBinaryTreeFromInorderAndPostorderTraversal,
    'populating-next-right-pointers-in-each-node': PopulatingNextRightPointersInEachNode,
    'flatten-binary-tree-to-linked-list': FlattenBinaryTreeToLinkedList,
}

module.exports = TEST_DICTIONARY;


