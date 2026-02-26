// <!-- What is DOM api -->

// <!--The DOM API (Document Object Model API) allows  JavaScript to interact and modifi the HTML document inside the browser dynamically



// <!--1)Access html elements -->

// <!-- accessing a html element using Id name -->
// <!-- Returns only one element not collection -->
// <!-- IDs must be unique -->
// <!-- if there is no target id than it will  return the null -->

// <!-- example -->
// document.getElementById("title");

// <!-- accessing a html element using class name  -->
// <!-- It returns a collection, not a single element.-->
// <!-- They can be anywhere in the document -->
// <!-- They do NOT need to be at the same level (not necessarily siblings) -->
// <!-- Can be chiled element in  different parent elements -->
// <!-- if there is no target class than it return collection with lenght 0 -->

// <!-- example -->
// document.getElementsByClassName("box");

// <!--accessing a html element using tag name  -->
// <!--it return collection -->


// <!-- example -->
// document.getElementsByTagName("p");




// <!-- but to access a html element using dom api it is recommend to use querySelector() or querySelectorAll() bcz it allow us to accsess html element  as id,class and tag name -->
// querySelector("id/class/tagname")//it return first element
// querySelectorAll()//it return array of element