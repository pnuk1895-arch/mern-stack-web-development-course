// eccessing a element to which we want to add a new element
let node=document.getElementById("node")
//creating a html elment that we want to add
let ele=document.createElement("div")

//inserting a html element
node.append(ele)//add the end of node(inside)
node.prepend(ele)//adds at the start of node(inside)
node.before(ele)//add before the node(outside)
node.after(ele)//add after the node(outside)
node.appendChild(ele)
node.removeChild(ele)
node.replaceChild(ele)

