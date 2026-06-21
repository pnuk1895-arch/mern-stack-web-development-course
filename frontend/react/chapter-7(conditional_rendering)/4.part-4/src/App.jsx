function App() {

  let isAdmin = true;

  return (
    <div>
        {isAdmin && <h1>Admin Panel</h1>}
    </div>
  )
}

export default App



// Difference Between && and Ternary
//  Operator	        Use
//    &&	      Sirf true par render false pe nahi
//    ?:	      True aur false dono cases don caes pe render hota hain



// logical operagor : and,or,not



//and operator

//        A   B     Result

//        1   0      0

//        0   1      0

//        0   0      0

//        1   1      1


// ek bhi condition false toh overall condtion false

//don condtion true hogi jabhi overall condtion true hogi


// falsy value:  false,0,null,undefined