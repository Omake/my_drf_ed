import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserList from './components/MyUser.js'
import ProjectList from './components/Project.js'
import TodoList from './components/Todo.js'
import Footer from './components/Footer.js'
import NavMenu from './components/Menu.js'
import {BrowserRouter, Route} from 'react-router-dom'


class App extends React.Component {

   constructor(props) {
       super(props)
       this.state = {
           'users': [],
           'projects': [],
           'todo': []
       }
   }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
        .then(response => {
            const users = response.data.results
            this.setState({
                    'users': users
            })
        })
        .catch(error => console.log(error))
        axios.get('http://127.0.0.1:8000/api/project/')
        .then(response => {
            const projects = response.data.results
            this.setState({
                    'projects': projects
            })
        })
        .catch(error => console.log(error))
        axios.get('http://127.0.0.1:8000/api/todo/')
        .then(response => {
            const todo = response.data.results
            this.setState({
                    'todo': todo
            })
        })
        .catch(error => console.log(error))
        }


   render () {
       return (
           <div>
            <BrowserRouter>
                <NavMenu />
                <Route exact path='/' component={() => <UserList users={this.state.users} />}  />
                <Route exact path='/project' component={() => <ProjectList projects={this.state.projects} />} />
                <Route path='/todo/:project_id'>
                    <TodoList todo={this.state.todo} />
                </Route>
            </BrowserRouter>
            <Footer />
           </div>
       )
   }
}


export default App;