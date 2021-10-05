import React from 'react'
import { useParams } from 'react-router-dom'


const TodoItem = ({todo}) => {
   return (
       <tr>
           <td>
               {todo.todo_text}
           </td>
           <td>
               {todo.project_id}
           </td>
           <td>
               {todo.created_at}
           </td>
       </tr>
   )
}


const TodoList = ({todo}) => {

    let { project_id } = useParams();
    let filtered_items = todo.filter((item) => item.project_id == project_id)
   return (
       <table>
           <th>
               todo_text
           </th>
           <th>
               Repository URL
           </th>
           <th>
               created_at
           </th>
           {filtered_items.map((item) => <TodoItem todo={item} />)}
       </table>
   )
}


export default TodoList
