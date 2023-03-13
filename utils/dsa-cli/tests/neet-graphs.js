
const assert = require('assert');
const ProblemTests = require('./problem-test');

class Node{
    constructor(val){
        this.val = val;
        this.neighbors = [];
    }

    push(neighbor){
        this.neighbors.push(neighbor);
    }

}

function arrayToNodeHeadNeighbors(array) {
    const nodes = [];
    for (let i = 0; i < array.length; i++) {
        nodes.push(new Node(i + 1));
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            nodes[i].push(nodes[array[i][j] - 1]);
        }
    }

    const head = new Node();
    head.neighbors = nodes;
    return head;

}

class CloneGraph extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        // this.tests.push(() => this.test_2());
    }

    test_1(){
        const cloneGraph = new this.Problem();
        this.current_test_name = '[[2,4],[1,3],[2,4],[1,3]] | [[2,4],[1,3],[2,4],[1,3]]';
        assert.deepEqual(cloneGraph.solve(arrayToNodeHeadNeighbors([[2,4],[1,3],[2,4],[1,3]])), arrayToNodeHeadNeighbors([[2,4],[1,3],[2,4],[1,3]]));
    }


}


class CourseSchedule extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
    }

    test_1(){
        const courseSchedule = new this.Problem();
        this.current_test_name = '2, [[1,0]] | true';
        assert.deepEqual(courseSchedule.solve(2, [[1,0]]), true);
    }

    test_2(){
        const courseSchedule = new this.Problem();
        this.current_test_name = '2, [[1,0],[0,1]] | false';
        assert.deepEqual(courseSchedule.solve(2, [[1,0],[0,1]]), false);
    }

}




const TEST_DICTIONARY = {
    'clone-graph': CloneGraph,
    'course-schedule': CourseSchedule
}


module.exports = TEST_DICTIONARY;

