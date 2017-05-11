'use strict';
var assert = require('assert');
var LinkedList = require('../../src/data-structures/linked-list').LinkedList;


describe('LinkedList', function () {
  describe('#push()', function () {
    it('should return 3 as size of List', function () {
      var linkedList = new LinkedList();
      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);
      assert.equal(3, linkedList.length);
    });

    it('should return 5 as size of List', function () {
      var linkedList = new LinkedList();

      [1,1,1,1,null].forEach(function(item){
          linkedList.push(item);
      });
      assert.equal(5, linkedList.length);
    });
  });


  describe("#clear()", function () {
    it('Shoulbe be empty after clear', function () {
      var linkedList = new LinkedList();

      [1,1,1,1,null].forEach(function(item){
          linkedList.push(item);
      });
      linkedList.clear();
      assert.equal(true, linkedList.isEmpty());

    });

  });
  describe("#toArray()", function () {
    it('Shoulbe be return [ 1 , 2 , 3 ] ', function () {
      var linkedList = new LinkedList();
      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);
      var seq = linkedList.toArray();
      assert.equal(JSON.stringify([1, 2, 3]), JSON.stringify(linkedList.toArray()));

    });

  });
  describe("#contains()", function () {
    it('Shoulbe be return true as result of contains ', function () {
      var linkedList = new LinkedList();
      linkedList.push(1);
      linkedList.push(2);
      linkedList.push(3);
      assert.equal(true, linkedList.contains(2));
    });

  });


});