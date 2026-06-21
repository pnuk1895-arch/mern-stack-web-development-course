
//if we have to implement a multiple condition inside a html element.

function App() {

  let marks = 80;

  return (
    <div>
      {
        marks >= 90
        ? <h1>A Grade</h1>
        : marks >= 70
        ? <h1>B Grade</h1>
        : <h1>C Grade</h1>
      }
    </div>
  )
}







