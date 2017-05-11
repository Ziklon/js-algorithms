'use strict';
var assert = require('assert');
var Queue = require('../../src/data-structures/queue').Queue;


describe('Queue', function () {
    describe('#push()', function () {
        it('should return 3 as size of Queue', function () {
            var queue = new Queue();
            queue.push(1);
            queue.push(2);
            queue.push(3);
            assert.equal(3, queue.length);
        });

        it('should return 5 as size of List', function () {
            var queue = new Queue();

            [1, 1, 1, 1, null].forEach(function (item) {
                queue.push(item);
            });
            assert.equal(5, queue.length);
        });
    });


    describe("#toArray()", function () {
        it('Shoulbe be return [ 1 , 2 , 3 ] ', function () {
            var queue = new Queue();
            queue.push(1);
            queue.push(2);
            queue.push(3);
            var seq = queue.toArray();
            assert.equal(JSON.stringify([1, 2, 3]), JSON.stringify(queue.toArray()));

        });

    });
    describe("#front()", function () {
        it('Shoulbe be retrieve 1 as result of front() ', function () {
            var queue = new Queue();
            queue.push(1);
            queue.push(2);
            queue.push(3);
            assert.equal(1, queue.front());
        });




    });
    describe("#pop()", function () {
        it('Shoulbe be retrieve 1 and delete the first item ', function () {
            var queue = new Queue();
            queue.push(1);
            queue.push(2);
            queue.push(3);
            assert.equal(1, queue.pop());
            assert.equal(JSON.stringify([2, 3]), JSON.stringify(queue.toArray()));
        });

    });
});