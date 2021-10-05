import React from 'react'
import {Link} from 'react-router-dom'


const ProjectItem = ({project}) => {
   return (
       <tr>
           <td>
               {project.name}
           </td>
           <td>
               {project.repo_url}
           </td>
           <td>
               <Link to={`todo/${project.id}`}>ToDo List</Link>
           </td>
       </tr>
   )
}


const ProjectList = ({projects}) => {
   return (
       <table>
           <th>
               Name
           </th>
           <th>
               Repository URL
           </th>
           <th>
               ToDo List
           </th>
           {projects.map((project) => <ProjectItem project={project} />)}
       </table>
   )
}


export default ProjectList
