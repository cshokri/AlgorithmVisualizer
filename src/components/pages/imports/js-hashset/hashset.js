/*
// Open-source (BSD) Javascript implementation of HashSets.
// BSD Licensed  - https://github.com/searchturbine/js-rapidly-searchable-hashset/blob/master/LICENSE
*/

export default class HashSet {
  constructor() {
    this._values = {};
    this.values = function () {
      var output = new Array();
      var counter = 0;
      for (let i in this._values) {
        output[counter++] = i;
      }
      return output;
    };
    this.contains = function (key) {
      return this._values.hasOwnProperty(key);
    };
    this.add = function (key) {
      this._values[key] = true;
    };
    this.remove = function (key) {
      delete this._values[key];
    };
    this.clear = function () {
      this._values = {};
    };
    this.copyToArray = function (array) {
      if (!(array instanceof Array)) {
        array = [];
      }
      for (let i in this._values) {
        array.push(i);
      }
      return array;
    };
    this.enumerate = function (fn) {
      if (typeof fn !== "function") {
        throw "enumerate expects parameter 1 to be a function";
      }
      for (let i in this._values) {
        fn(i);
      }
    };
  }
}
