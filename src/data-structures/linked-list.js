/**
 * 
 * 
 * @module data-structures/linked-list
 */

(function (exports) {
  'use strict';


  /**
   * Node of the Linked List
   * @public
   * @constructor
   * @param {Object} data Data of the node.
   */
  exports.Node = function(data){

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
  exports.LinkedList  = function(){
      this.first = null;
      this.last = null;
      this.length = 0;
  };

  /**
   * Add data to the end of linked list
   * @public
   * @method
   * @param {Object} data Data which should be added.
   */
  exports.LinkedList.prototype.push = function(data){

      var node = new exports.Node(data);

      if(this.isEmpty()){
          this.first = this.last = node;
      }else{
          this.last.next = node;
          this.last = node;
      }
      this.length = this.length + 1;

  };

  /**
   * Clear the Linked List 
   * @public
   * @method
   */
  exports.LinkedList.prototype.print = function(){
      
        var tmp = this.first;
        var seq = [];
        while(tmp){
          seq.push(tmp.data);
          tmp = tmp.next;
        }

        console.log(seq);
  };


  /**
   * Clear the Linked List 
   * @public
   * @method
   */
  exports.LinkedList.prototype.clear = function(){
      this.first = this.last = null;
      this.length = 0;
  };

   /**
   * Check if the list is empty or not
   * @public
   * @method
   */
  exports.LinkedList.prototype.isEmpty = function(){
      return this.first ===null;
  };










  /**
   * Method to sum 2 numbers
   * @module adhoc/sum
   * @param {a} number - Number to sum.
   * @param {b} number - Number to sum.
   * @returns {Number} return the sum of a + b
   *
   * @example
   * var sum = require('your_path/src/sum').sum;
   *
   * console.log(sum(1,2)); // 3
   */
  exports.sum = function ( a, b ) {
      return a + b;
  };

}(typeof exports === 'undefined' ? window : exports));
