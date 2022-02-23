// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//input: mixed
//output: string

var stringifyJSON = function(obj) {
  console.log(obj);
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'number' || obj === null) {
    return obj + '';
  } else if (typeof obj === 'boolean') {
    return obj + '';
  }

  var stringElements = function (element) {
    if (Array.isArray(element) && element.length === 0) {
      return '[]';
    }

    if (Array.isArray(element)) {
      return '[' + element.map(stringElements) + ']';
    }

    if (typeof element === 'number') {
      return element;
    } else if (typeof element === 'string') {
      console.log(`"${element}"`);
      return `"${element}"`;
    }
  };

  if (Array.isArray(obj)) {
    return '[' + obj.map(stringElements).toString() + ']';
  }

  if (!Array.isArray(obj) && Object.keys(obj).length === 0) {
    return '{}';
  }

  var processObj = function(object) {
    for (var key in object) {
      if (typeof object[key] === 'boolean' || object[key] === null) {
        result += '"' + key + '":' + object[key] + ',';
      } else if (typeof object[key] === 'object') {
        processObj(object[key]);
      } else {
        result += '"' + key + '"' + ':' + '"' + object[key] + '",';
      }
    }
  };

  if (!Array.isArray(obj)) {
    var result = '{';
    processObj(obj);
    result = result.substring(0, result.length - 1);
    return result + '}';
  }

};
