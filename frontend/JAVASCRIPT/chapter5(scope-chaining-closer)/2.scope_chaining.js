const level1 = "Global";

function outer() {
  const level2 = "Outer";

  function middle() {
    const level3 = "Middle";

    function inner() {
      const level4 = "Inner";

      // Can access ALL outer scopes!
      console.log(level4);  // "Inner"
      console.log(level3);  // "Middle"
      console.log(level2);  // "Outer"
      console.log(level1);  // "Global"
    }

    inner();
  }

  middle();
}

outer();