
const assert = require('assert');
const ProblemTests = require('./problem-test');

class AddTwoNumbers extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());

    }

    test_1() {
        this.current_test_name = "[2,4,3] + [5,6,4] => [7,0,8]"
        const problemToTest = new this.Problem();
        assert.deepEqual(problemToTest.solve([2, 4, 3], [5, 6, 4]), [7, 0, 8]);
    }

    test_2() {
        this.current_test_name = "[0] + [0] => [0]"
        const problemToTest = new this.Problem();
        assert.deepEqual(problemToTest.solve([0], [0]), [0]);
    }

    test_3() {
        this.current_test_name = "[9,9,9,9,9,9,9] + [9,9,9,9] => [8,9,9,9,0,0,0,1]"
        const problemToTest = new this.Problem();
        assert.deepEqual(problemToTest.solve([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]), [8, 9, 9, 9, 0, 0, 0, 1]);
    }
}


class CopyListWithRandomPointer extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        // this.tests.push(() => this.test_2());
        // this.tests.push(() => this.test_3());

    }

    test_1() {
        this.current_test_name = "[[7,null],[13,0],[11,4],[10,2],[1,0]] => [[7,null],[13,0],[11,4],[10,2],[1,0]]"
        const problemToTest = new this.Problem();
        assert.deepEqual(problemToTest.solve([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]), [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]);
    }


}


class FindTHeDuplicateNumber extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());

    }

    test_1() {
        this.current_test_name = "[1,3,4,2,2] => 2"
        const problemToTest = new this.Problem();
        assert(problemToTest.solve([1, 3, 4, 2, 2]) == 2);
    }

    test_2() {
        this.current_test_name = "[3,1,3,4,2] => 3"
        const problemToTest = new this.Problem();
        assert(problemToTest.solve([3, 1, 3, 4, 2]) == 3);
    }

    test_3() {
        this.current_test_name = "[1,1] => 1"
        const problemToTest = new this.Problem();
        assert(problemToTest.solve([1, 1]) == 1);
    }


}



class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const arrayToListNode = (array) => {
    if (!array || array.length === 0) {
        return null;
    }

    let head = new ListNode(array[0]);
    let node = head;

    for (let i = 1; i < array.length; i++) {
        node.next = new ListNode(array[i]);
        node = node.next;
    }

    return head;
};


class LinkedListCycle extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        this.current_test_name = "[3,2,0,-4] => true"
        const problemToTest = new this.Problem();
        const list = arrayToListNode([3, 2, 0, -4]);
        list.next.next.next.next = list.next;
        assert(problemToTest.solve(list) == true);
    }

    test_2() {
        this.current_test_name = "[1,2] => true"
        const problemToTest = new this.Problem();
        const list = arrayToListNode([1, 2]);
        list.next.next = list;
        assert(problemToTest.solve(list) == true);
    }

    test_3() {
        this.current_test_name = "[1] => false"
        const problemToTest = new this.Problem();
        const list = arrayToListNode([1]);
        assert(problemToTest.solve(list) == false);

    }


}


class LRUCache extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        this.current_test_name = "[[1,1],[2,2],get[1],[3,3],[2],[4,4],get[1],get[3],get[4]] => [1,-1,3,-1,4]"
        const problemToTest = new this.Problem(2);
        problemToTest.put(1, 1);
        problemToTest.put(2, 2);
        assert(problemToTest.get(1) == 1);
        problemToTest.put(3, 3);
        console.log("Attempting to get 2", problemToTest.get(2));
        assert(problemToTest.get(2) == -1);
        problemToTest.put(4, 4);
        assert(problemToTest.get(1) == -1);
        assert(problemToTest.get(3) == 3);
        assert(problemToTest.get(4) == 4);

    }

    test_2() {
        this.current_test_name = "Test the limits of lru 3"
        const problemToTest = new this.Problem(3);
        problemToTest.put(1, 1);
        problemToTest.put(2, 2);
        problemToTest.put(3, 3);
        problemToTest.put(4, 4);
        assert(problemToTest.get(4) == 4);
        assert(problemToTest.get(1) == -1);


        problemToTest.put(1, 2);
        assert(problemToTest.get(1) == 2);
        assert(problemToTest.get(2) == -1);

    }


    test_3() {
        this.current_test_name = "[[2,1],[2,2],get[2],[1,1],[4,1],get[2]] => [2,1]"
        const problemToTest = new this.Problem(2);
        problemToTest.put(2, 1);
        problemToTest.put(2, 2);
        assert(problemToTest.get(2) == 2);
        problemToTest.put(1, 1);
        problemToTest.put(4, 1);
        assert(problemToTest.get(2) == -1);
        problemToTest.put(5, 5);
        assert(problemToTest.get(5) == 5);

    }

}


class MergeKSortedList extends ProblemTests {

    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        this.current_test_name = "[[1,4,5],[1,3,4],[2,6]] => [1,1,2,3,4,4,5,6]"
        const problemToTest = new this.Problem();
        const list1 = arrayToListNode([1, 4, 5]);
        const list2 = arrayToListNode([1, 3, 4]);
        const list3 = arrayToListNode([2, 6]);
        const lists = [list1, list2, list3];
        const result = problemToTest.solve(lists);
        assert(result.val == 1);
        assert(result.next.val == 1);
        assert(result.next.next.val == 2);
        assert(result.next.next.next.val == 3);
        assert(result.next.next.next.next.val == 4);
        assert(result.next.next.next.next.next.val == 4);
        assert(result.next.next.next.next.next.next.val == 5);
        assert(result.next.next.next.next.next.next.next.val == 6);
    }


    test_2() {
        this.current_test_name = "[]"
        const problemToTest = new this.Problem();
        const lists = [];
        const result = problemToTest.solve(lists);
        // console.log("test_2 result", result);
        assert(result == null);

    }

    test_3() {
        this.current_test_name = "[[]]"
        const problemToTest = new this.Problem();
        const lists = [[]];
        const result = problemToTest.solve(lists);
        console.log("test_2 result", result);
        assert.deepEqual(result, []);
    }


}


class MergeTwoSortedList extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        this.current_test_name = "[1,2,4],[1,3,4] => [1,1,2,3,4,4]"
        const problemToTest = new this.Problem();
        const list1 = arrayToListNode([1, 2, 4]);
        const list2 = arrayToListNode([1, 3, 4]);
        const result = problemToTest.solve(list1, list2);
        assert(result.val == 1);
        assert(result.next.val == 1);
        assert(result.next.next.val == 2);
        assert(result.next.next.next.val == 3);
        assert(result.next.next.next.next.val == 4);
        assert(result.next.next.next.next.next.val == 4);
    }

    test_2() {
        this.current_test_name = "[]"
        const problemToTest = new this.Problem();
        const list1 = arrayToListNode([]);
        const list2 = arrayToListNode([]);
        const result = problemToTest.solve(list1, list2);
        assert(result == null);
    }

    test_3() {
        this.current_test_name = "[1],[2] => [1,2]"
        const problemToTest = new this.Problem();
        const list1 = arrayToListNode([1]);
        const list2 = arrayToListNode([2]);
        const result = problemToTest.solve(list1, list2);
        assert(result.val == 1);
        assert(result.next.val == 2);
    }

}


class RemoveFromNthNode extends ProblemTests {
    constructor(Problem) {
        super(Problem);
        this.tests.push(() => this.test_1());
        this.tests.push(() => this.test_2());
        this.tests.push(() => this.test_3());
    }

    test_1() {
        this.current_test_name = "[1,2,3,4,5], 2 => [1,2,3,5]"
        const problemToTest = new this.Problem();
        const list = arrayToListNode([1, 2, 3, 4, 5]);
        const result = problemToTest.solve(list, 2);
        assert(result.val == 1);
        assert(result.next.val == 2);
        assert(result.next.next.val == 3);
        assert(result.next.next.next.val == 5);
    }

    test_2() {
        this.current_test_name = "[1], 1 => []"
        const problemToTest = new this.Problem();
        const list = arrayToListNode([1]);
        const result = problemToTest.solve(list, 1);
        assert(result == null);
    }

    test_3() {
        this.current_test_name = "[1,2], 1 => [1]"
        const problemToTest = new this.Problem();
        const list = arrayToListNode([1, 2]);
        const result = problemToTest.solve(list, 1);
        assert(result.val == 1);
    }

}



const PROBLEM_DICT = {
    'add-two-numbers': AddTwoNumbers,
    // 'copy-list-with-random-pointer': CopyListWithRandomPointer, // Too hard to test.
    'find-the-duplicate-number': FindTHeDuplicateNumber,
    'linked-list-cycle': LinkedListCycle,
    'lru-cache': LRUCache,
    'merge-k-sorted-list': MergeKSortedList,
    'merge-two-sorted-list': MergeTwoSortedList,
    'remove-from-nth': RemoveFromNthNode,
}


module.exports = PROBLEM_DICT;

