const assert = require('assert');
const ProblemTests = require('./problem-test');


class NumberOfProvinces extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());

    }

    test1() {
        const isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];
        const expected = 2;
        this.current_test_name = '[[1, 1, 0], [1, 1, 0], [0, 0, 1]] | 2'
        const structure = new this.Problem()
        const actual = structure.solve(isConnected);
        assert.equal(actual, expected);
    }

    test2() {
        const isConnected = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
        const expected = 3;
        this.current_test_name = '[[1,0,0],[0,1,0],[0,0,1]] | 3'
        const structure = new this.Problem()
        const actual = structure.solve(isConnected);
        assert.equal(actual, expected);
    }

}


class FindEventualSafeStates extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1() {
        /**
         * Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
            Output: [2,4,5,6]
            Explanation: The given graph is shown above.
            Nodes 5 and 6 are terminal nodes as there are no outgoing edges from either of them.
            Every path starting at nodes 2, 4, 5, and 6 all lead to either node 5 or 6.
         */

        const graph = [[1, 2], [2, 3], [5], [0], [5], [], []];
        const expected = [2, 4, 5, 6];
        this.current_test_name = '[[1,2],[2,3],[5],[0],[5],[],[]] | [2,4,5,6]'
        const structure = new this.Problem()
        const actual = structure.solve(graph);
        assert.deepEqual(actual, expected);

    }

    test_2() {
        /**
         * Input: graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]]
            Output: [4]
            Explanation:
            Only node 4 is a terminal node, and every path starting at node 4 leads to node 4.
         */

        const graph = [[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []];
        const expected = [4];
        this.current_test_name = '[[1,2,3,4],[1,2],[3,4],[0,4],[]] | [4]'
        const structure = new this.Problem()
        const actual = structure.solve(graph);
        assert.deepEqual(actual, expected);
    }

}

class KeyAndRooms extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());
    }

    test1() {
        const rooms = [[1], [2], [3], []];
        const expected = true;
        this.current_test_name = '[[1],[2],[3],[]] | true'
        const structure = new this.Problem()
        const actual = structure.solve(rooms);
        assert.equal(actual, expected);
    }

    test2() {
        const rooms = [[1, 3], [3, 0, 1], [2], [0]];
        const expected = false;
        this.current_test_name = '[[1,3],[3,0,1],[2],[0]] | false'
        const structure = new this.Problem()
        const actual = structure.solve(rooms);
        assert.equal(actual, expected);

    }
}

class ShortedPathWithAlternatingColors extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());
    }

    test1() {
        const board = [
            ['X', 'X', 'X', 'X'],
            ['X', 'O', 'O', 'X'],
            ['X', 'X', 'O', 'X'],
            ['X', 'O', 'X', 'X']
        ];
        const expected = [
            ['X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X'],
            ['X', 'O', 'X', 'X']
        ];
        this.current_test_name = 'board | expected'
        const structure = new this.Problem()
        structure.solve(board);
        assert.deepEqual(board, expected);
    }

    test2() {
        const board = [
            ['O', 'O', 'O'],
            ['O', 'O', 'O'],
            ['O', 'O', 'O']
        ];
        const expected = [
            ['O', 'O', 'O'],
            ['O', 'O', 'O'],
            ['O', 'O', 'O']
        ];
        this.current_test_name = 'board | expected'
        const structure = new this.Problem()
        structure.solve(board);
        assert.deepEqual(board, expected);
    }
}

class NearestExitFromEntranceInMaze extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());
        this.tests.push(() => this.test3());
    }

    test1() {
        const maze = [
            ['+', '+', '.', '+'],
            ['.', '+', '.', '+'],
            ['+', '+', '+', '+']
        ];
        const entrance = [1, 2];
        const expected = 1;
        this.current_test_name = 'maze | entrance | expected'
        const structure = new this.Problem()
        const actual = structure.solve(maze, entrance);
        assert.deepEqual(actual, expected);
    }


    test2() {
        /**
         * Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]
            Output: 2
            Explanation: There is 1 exit in this maze at [1,2].
            [1,0] does not count as an exit since it is the entrance cell.
            Initially, you are at the entrance cell [1,0].
            - You can reach [1,2] by moving 2 steps right.
            Thus, the nearest exit is [1,2], which is 2 steps away.
         */

        const maze = [
            ['+', '+', '+'],
            ['.', '.', '.'],
            ['+', '+', '+']
        ];
        const entrance = [1, 0];
        const expected = 2;
        this.current_test_name = 'maze | entrance | expected'
        const structure = new this.Problem()
        const actual = structure.solve(maze, entrance);
        assert.deepEqual(actual, expected);
    }

    test3() {
        /**
         * Input: maze = [[".","+"]], entrance = [0,0]
            Output: -1
            Explanation: There are no exits in this maze.
         */
        const maze = [
            ['.', '+']
        ];
        const entrance = [0, 0];
        const expected = -1;
        this.current_test_name = 'maze | entrance | expected'
        const structure = new this.Problem()
        const actual = structure.solve(maze, entrance);
        assert.deepEqual(actual, expected);
    }

}


class ShortestBridge extends ProblemTests {
    constructor(Problem) {
        super(Problem)
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());
    }

    test1() {
        const grid = [
            [0, 1],
            [1, 0]
        ];
        const expected = 1;
        this.current_test_name = 'grid | expected'
        const structure = new this.Problem()
        const actual = structure.solve(grid);
        assert.deepEqual(actual, expected);
    }

    test2() {
        const grid = [
            [0, 1, 0],
            [0, 0, 0],
            [0, 0, 1]
        ];
        const expected = 2;
        this.current_test_name = 'grid | expected'
        const structure = new this.Problem()
        const actual = structure.solve(grid);
        assert.deepEqual(actual, expected);
    }

    test3() {
        const grid = [
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1]
        ];

        const expected = 1;
        this.current_test_name = 'grid | expected'
        const structure = new this.Problem()
        const actual = structure.solve(grid);
        assert.deepEqual(actual, expected);
    }
}


class JumpGameIII extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());
    }

    test1() {
        const arr = [4, 2, 3, 0, 3, 1, 2];
        const start = 5;
        const expected = true;
        this.current_test_name = 'arr | start | expected'
        const structure = new this.Problem()
        const actual = structure.solve(arr, start);
        assert.deepEqual(actual, expected);
    }

    test2() {
        const arr = [4, 2, 3, 0, 3, 1, 2];
        const start = 0;
        const expected = true;
        this.current_test_name = 'arr | start | expected'
        const structure = new this.Problem()
        const actual = structure.solve(arr, start);
        assert.deepEqual(actual, expected);
    }
}

class Matrix01 extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());
    }

    test1() {
        /**
         * Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
            Output: [[0,0,0],[0,1,0],[0,0,0]]
         */

        const mat = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
        const expected = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
        this.current_test_name = 'mat | expected'
        const structure = new this.Problem()
        const actual = structure.solve(mat);
        assert.deepEqual(actual, expected);

    }

    test2(){
        /**
         * Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
            Output: [[0,0,0],[0,1,0],[1,2,1]]
         */

        const mat = [[0,0,0],[0,1,0],[1,1,1]];
        const expected = [[0,0,0],[0,1,0],[1,2,1]];
        this.current_test_name = 'mat | expected'
        const structure = new this.Problem()
        const actual = structure.solve(mat);
        assert.deepEqual(actual, expected);
    }

}

const TEST_DICTIONARY = {
    'number-of-provinces': NumberOfProvinces,
    'find-eventual-safe-states': FindEventualSafeStates,
    'key-and-rooms': KeyAndRooms,
    'shortest-path-with-alternating-colors': ShortedPathWithAlternatingColors,
    'nearest-exit-from-entrance-in-maze': NearestExitFromEntranceInMaze,
    'shortest-bridge': ShortestBridge,
    'jump-game-iii': JumpGameIII,
    '01-matrix': Matrix01
    

}

module.exports = TEST_DICTIONARY;


