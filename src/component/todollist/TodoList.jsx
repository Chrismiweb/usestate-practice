// import React, { useState } from 'react'

// function TodoList() {
//     const[task, SetTask] = useState("")
//     const[todo, SetTodo] = useState("")
//     function handleAlltask(e){
//         SetTask(e.target.value)
//         if(task){
//             return(SetTask)
//         }
//     }
//     function handleSubmit(){
//         if(task.trim()){
//             SetTodo([...todo, task.trim()])
//             SetTask("")
//         }
//     }
//     function handleDelete(index) {
//         SetTodo(todo.filter((_, i) => i !== index));
//       }
    
//   return (
//     <div>
//         <input type="text" value={task} onChange={handleAlltask} />
//         <button onClick={handleSubmit}>Add Todo</button>
//         <ul>
//             {todo.map((tod, index) => (
//                 <li key={index}>
//                 {tod}
//                 <button onClick={() => handleDelete(index)}>Delete</button>
//                 </li>
//             ))}
//         </ul>
//   </div>
//   )
// }

// export default TodoList