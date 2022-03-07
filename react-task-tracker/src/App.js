import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState  } from "react"
import AddTask from "./components/AddTask";

function App() {
  // App level state
  //state is immutable and is one way data.
    const [tasks, setTasks] = useState([
            {
                id: 1,
                text: 'test',
                day: 'Feb 5th at 3:30pm',
                reminder: false
            },
            {
                id: 2,
                text: 'test2',
                day: 'Feb 5th at 1:30pm',
                reminder: false
            }
        
        
    ])

// Delete task
const deleteTask = (id) => {
  //console.log('delete', id)
  setTasks(tasks.filter((task) => task.id !== id))
}

//toggle reminder
const toggleReminder = (id) => {
  // ... is used to copy that entire object
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    // Allows to retun only 1 parent element
    <div className="container">
        <Header />
        <AddTask />
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle = {toggleReminder}/> : 'No Tasks' }
    </div>
  );
}

export default App;
