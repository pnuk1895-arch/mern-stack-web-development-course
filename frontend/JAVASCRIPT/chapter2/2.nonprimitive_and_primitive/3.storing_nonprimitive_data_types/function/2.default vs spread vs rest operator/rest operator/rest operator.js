//rest operator(...) packs multiple arguments into a single array.

//use case1:used in function parmater

//we used rest operator as a paramter in function defination when we don't know how many argument caller  passed.


function num(...numbers) {
  console.log(numbers);//it give array of parameter

}

num(1, 2, 3, 4);

//output:
[1,2,3,4,5,6]