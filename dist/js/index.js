"use strict";

require("./src/css/style.css");
var number = function number(array) {
  if (array.length === 0) return [];
  for (var i = 0; i < array.length; i++) {
    array[i] = "".concat(i + 1, ": ").concat(array[i]);
  }
  return array;
};
number(['a', 'b', 'c']);