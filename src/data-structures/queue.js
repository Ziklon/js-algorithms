/**
 *
 *
 * @module data-structures/queue
 */

(function (exports) {
  'use strict';


  /**
   * Node of the Queue
   */
  exports.Node = function (data) {

    /**
     * Data of the Node
     * @member {Object}
     */
    this.data = data;

    /**
     * Next Node
     * @member {Node}
     */
    this.next = null;
  };

  /**
   * Linked List
   * @public
   * @constructor
   */
  exports.Queue = function () {
    this.first = null;
    this.last = null;
    this.length = 0;
  };

  /**
   * Add data to the end of linked list
   * @public
   * @method
   * @param {Object} data Data which should be added.
   * @return {Void}
   */
  exports.Queue.prototype.push = function (data) {

    var node = new exports.Node(data);

    if (this.isEmpty()) {
      this.first = this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length = this.length + 1;

  };


  /**
   * Remove the next element to be attended
   * @public
   * @method
   * @return {Object} data
   */
  exports.Queue.prototype.pop = function () {

    if (this.isEmpty()) {
      throw "Queue is empty";
    }
    var node = this.first,
      data = node.data;
    this.first = node.next;
    return data;
  };

  /**
   * Retrieve the next element to be attended
   * @public
   * @method
   * @returns {Object} data
   */
  exports.Queue.prototype.front = function () {

    if (this.isEmpty()) {
      throw "Queue is empty";
    }
    var node = this.first;
    return node.data;
  };



  /**
   * Clear the Linked List
   * @public
   * @method
   * @return {Array}
   */
  exports.Queue.prototype.toArray = function () {

    var tmp = this.first,
      seq = [];
    while (tmp) {
      seq.push(tmp.data);
      tmp = tmp.next;
    }
    return seq;
  };


  /**
   * Check if the Queue is empty or not
   * @public
   * @method
   * @returns {Boolean}
   */
  exports.Queue.prototype.isEmpty = function () {
    return this.first === null;
  };




}(typeof exports === 'undefined' ? window : exports));
