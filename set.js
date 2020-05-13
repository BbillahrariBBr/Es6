//set is a collection of data
// like allmost array
// doesnt contain  any duplicates 
var myset = new Set();
myset.add('Bangladesh');
myset.add('India');
myset.add('Srilanka');
myset.add('Nepal');
myset.add('Maldip');
myset.add('Srilanka');
myset.add('Srilanka');


console.log(myset);

// .clear() all value clear

//.has like map 
// myset.clear()
// .delete(value)
// myset.delete('Nepal');
// for know size
console.log(myset.size);

//show values
console.log(myset.values());
