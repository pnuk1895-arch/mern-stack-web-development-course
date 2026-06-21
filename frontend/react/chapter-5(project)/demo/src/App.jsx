import "./App.css"


function App(){
    return (
      <div class="taskBar">
        <div class="bar1">
          <h2>Task Manager</h2> 
          <form action="">
            <input class="input1" type="text" placeholder="Enter your task" />
            <input class="input2" type="date"/>
            <button class="button1"> Add Task </button>
          </form>        
          
        </div>
      

        <div class="bar2">

          <div id="task1">
            <h4>Learn react properly</h4>
            <p>10 may 2026</p>
          </div>

          <div id="task2">
            <h4>Built MERN project</h4>
            <p>12 May 2026</p>
          </div>
        </div>
      </div>
    )
}


export default App












