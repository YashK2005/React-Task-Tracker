import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

//functional implementation
const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1, 
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2, 
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3, 
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }

  ])
 
  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show - Click Add to add a task'}
    </div>
  );
}



//class based implementation

// class App extends React.Component {
//   render() {
//     return (
//       <div className='container'>
//         <h1>Hello from a class</h1>
//       </div>
//     )
//   }
// }


export default App;
