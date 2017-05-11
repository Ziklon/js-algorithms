/**
 * 
 * 
 * @module data-structures/linked-list
 */

(function (exports) {
  'use strict';


  /**
   * Node of the Linked List
   * 
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
  exports.LinkedList = function () {
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
  exports.LinkedList.prototype.push = function (data) {

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
   * Clear the Linked List 
   * @public
   * @method
   * @returns {Array} the elements from the linked list
   */
  exports.LinkedList.prototype.toArray = function () {

    var tmp = this.first;
    var seq = [];
    while (tmp) {
      seq.push(tmp.data);
      tmp = tmp.next;
    }
    return seq;
  };


  /**
   * Clear the Linked List 
   * @public
   * @method
   */
  exports.LinkedList.prototype.clear = function () {
    this.first = this.last = null;
    this.length = 0;
  };

  /**
   * Check if the list is empty or not
   * @public
   * @method
   * @return {Boolean}
   */
  exports.LinkedList.prototype.isEmpty = function () {
    return this.first === null;
  };


  /**
   * Check if Linked List contains data
   * @public
   * @method
   * @param {Object} data Data which should be searched.
   * @return {Boolean}
   */
  exports.LinkedList.prototype.contains = function (data) {
    var tmp = this.first;
    while (tmp) {
      if (tmp.data === data) return true;
      tmp = tmp.next;
    }
    return false;
  };


}(typeof exports === 'undefined' ? window : exports));