function stringChop(str, size) {
  // your code here
	if (str === null) {
    return [];
  }
 const result = [];
  for (let i = 0; i < str.length; i += size) {
    const chunk = str.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
