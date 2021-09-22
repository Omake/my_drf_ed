import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserList from './components/MyUser.js'
import Footer from './components/Footer.js'
import NavMenu from './components/Menu.js'


class App extends React.Component {

   constructor(props) {
       super(props)
       this.state = {
           'users': []
       }
   }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
        .then(response => {
            const test_users = response.data
            this.setState({
                    'users': test_users
            })
        })
        .catch(error => console.log(error))
        }


   render () {
       return (
           <div>
               <NavMenu />
               <UserList users={this.state.users} />
               <Footer />
           </div>
       )
   }
}


export default App;