var uniqueInOrder = function(iterable) {
  var output = [];
  if (typeof iterable === "string")
    output = iterable.split('');
  else
    output = iterable;
  var i = 1;
  while (i < output.length) {
    if (output[i] === output[i - 1])
      output.splice(i, 1);
    else
      i++;
  }
  return (output);
}