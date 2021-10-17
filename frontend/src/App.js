import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserList from './components/MyUser.js'
import ProjectList from './components/Project.js'
import TodoList from './components/Todo.js'
import Footer from './components/Footer.js'
import NavMenu from './components/Menu.js'
import LoginForm from './components/Auth.js'
import {BrowserRouter, Route, Link} from 'react-router-dom'


class App extends React.Component {

   constructor(props) {
       super(props)
       this.state = {
           'users': [],
           'projects': [],
           'todo': [],
           'token': ''
       }
   }
   set_token(token) {
     localStorage.setItem('token', token)
     this.setState({'token': token}, ()=>this.load_data())
   }

  get_token(username, password) {
    axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password})
    .then(response => {
        this.set_token(response.data['token'])
    }).catch(error => alert('Неверный логин или пароль'))
  }

  get_headers() {
    let headers = {
      'Content-Type': 'application/json'
    }
  if (this.is_authenticated())
    {
        headers['Authorization'] = 'Token ' + this.state.token
    }
    return headers
  }

  get_token_from_storage() {
    let token = localStorage.getItem('token')
    this.setState({'token': token}, ()=>this.load_data())
  }

  is_authenticated() {
    return this.state.token != ''
  }

  logout() {
    this.set_token('')
  }

  load_data() {
    const headers = this.get_headers()
    axios.get('http://127.0.0.1:8000/api/users/', {headers})
        .then(response => {
            this.setState({users: response.data.results})
        }).catch(error => {
        console.log(error)
        this.setState({'users': []})
        })

    axios.get('http://127.0.0.1:8000/api/project/', {headers})
        .then(response => {
            this.setState({projects: response.data.results})
        }).catch(error => {
        console.log(error)
        this.setState({'projects': []})
        })
    axios.get('http://127.0.0.1:8000/api/todo/', {headers})
        .then(response => {
            this.setState({todo: response.data.results})
        }).catch(error => console.log(error))
  }
    componentDidMount() {
        this.get_token_from_storage()
        }

   render () {
       return (
           <div>
            <BrowserRouter>
                <ul>
                <NavMenu />
                  <li>
                   {this.is_authenticated() ? <button onClick={()=>this.logout()}>Logout</button> : <Link to='/login'>Login</Link>}
                  </li>
                </ul>
                <Route exact path='/login' component={() => <LoginForm get_token={(username, password) => this.get_token(username, password)} />} />
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