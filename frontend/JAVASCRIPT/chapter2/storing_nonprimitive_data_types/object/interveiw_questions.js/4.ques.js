// pridict the ouput:

const a = {}
const b = { key: "b" };
const c = { key: "c" };

a[b]=456
a[c]=123
console.log(a)

// //ans) 123
 
// a[b]=456
// a[{key:"b"}]=456
// javascript automatically convert object into string beacuse anyone can't make object inside object, In the object only works string datatype.
// a["[object : Object]"] =456

// second case
// a[c]=123
// a[{key:"c"}]=123
// a["[object:Object]"]=123

// let a={
  
//     "[object:Object]" :456,
//      "[object:Object]" :123//It replaces value from the first one 
// }
// console.log(a)