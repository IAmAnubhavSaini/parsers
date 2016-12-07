function removeSingleLineComments(prog) {
  var input = prog.split('');
  var inComment = false;
  var output = '';
  for (var i = 0; i < input.length; i++) {
    if (input[i] === '/' && input[i + 1] === '/') {
      inComment = true;
    }
    if (inComment) {
      do {
        i++;
      } while (input[i] != '\n');
      inComment = false;
    }
    output += input[i];
  }
  return output;
}
