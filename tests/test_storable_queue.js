const assert = require('assert');
const { StorableQueue } = require('../utils/StorableQueue');

describe('Queue', () => {
    beforeEach(async () => {
        // Create a new instance of the Queue class and load the data from the database
        this.queue = new StorableQueue({ name: 'test-queue' });
        const _ = await this.queue.load();
    });

    afterEach(async () => {
        // Save the state of the queue to the database and delete the instance
        delete this.queue;
    });

    it('should add elements to the queue', () => {
        this.queue.enqueue('a');
        // assert.strictEqual(this.queue.length, 1);
        assert.strictEqual(this.queue.peek(), 'a');
    });

    it('should remove elements from the queue', () => {
        this.queue.enqueue('a');
        this.queue.enqueue('b');
        assert.strictEqual(this.queue.length, 2);
        assert.strictEqual(this.queue.dequeue(), 'a');
        assert.strictEqual(this.queue.length, 1);
        assert.strictEqual(this.queue.peek(), 'b');
    });

    it('should return undefined when dequeueing from an empty queue', () => {
        assert.strictEqual(this.queue.length, 0);
        assert.strictEqual(this.queue.dequeue(), undefined);
    });

    it('should return the length of the queue', () => {
        this.queue.enqueue('a');
        this.queue.enqueue('b');
        assert.strictEqual(this.queue.length, 2);
    });

    it('should return true when the queue is empty', () => {
        assert.strictEqual(this.queue.isEmpty, true);
        this.queue.enqueue('a');
        assert.strictEqual(this.queue.isEmpty, false);
    });
});
