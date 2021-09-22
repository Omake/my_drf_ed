import React from 'react'


const MyUserItem = ({user}) => {
   return (
       <tr>
           <td>
               {user.first_name}
           </td>
           <td>
               {user.last_name}
           </td>
           <td>
               {user.birthday_year}
           </td>
       </tr>
   )
}


const UserList = ({users}) => {
   return (
       <table>
           <th>
               First name
           </th>
           <th>
               Last Name
           </th>
           <th>
               Birthday year
           </th>
           {users.map((user) => <MyUserItem user={user} />)}
       </table>
   )
}


export default UserList
