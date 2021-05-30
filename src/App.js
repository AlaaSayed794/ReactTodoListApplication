import './App.css';
import Todos from './Components/Todos'
import Lists from './Components/Lists'
import AddTodo from './Components/AddTodo'
import AddList from './Components/AddList'
import { Card, Button, Accordion } from 'react-bootstrap'

import React, { Component } from 'react'

export default class App extends Component {
  //mounting methods
  constructor(props) {
    super(props)
    this.state = { todos: [], lists: [], currentList: 0, loading: true }

  }
  componentDidMount() {
    this.getAll()
  }

  render() {
    console.log(this.state)
    const todosss = this.state.loading ? <h2>loading</h2> : <Todos todos={this.state.todos} delTodo={this.delTodo} editTodo={this.editTodo} />
    const lists = this.state.loading ? <h2>loading</h2> : <Lists getTodos={this.getTodos} lists={this.state.lists} delList={this.delList} editList={this.editList} getTodosByList={this.getTodosByList} />

    return (
      <div className="App">

        <Accordion >
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                add list
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>   <AddList buttonText="add list" addList={this.addList} /></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                add todo
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>        <AddTodo buttonText="add Todo" addTodo={this.addTodo} lists={this.state.lists} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>




        <div className="horizontal-view" >
          <Card style={{ marginRight: "50px", paddingRight: "100px" }}>
            {lists}
          </Card>
          <Card style={{ marginTop: "50px", paddingRight: "100px" }}>
            {todosss}

          </Card>
        </div>

      </div >
    )
  }
  addTodo = async (description, listId) => {
    await fetch("todos", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ description, listId })
    }).then(res => res.json()).then(jsonRes => {
      if (!this.state.currentList || this.state.currentList == listId)
        this.setState(
          {
            todos: [...this.state.todos, jsonRes]
          }
        )
    })
  }
  addList = async (description) => {
    await fetch("todoslists", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ description })
    }).then(res => res.json()).then(jsonRes => {

      this.setState(
        {
          lists: [...this.state.lists, jsonRes]
        }
      )
    })
  }

  delTodo = async (id) => {
    await fetch("todos/" + id, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => res.json()).then(jsonRes => {
      this.setState(
        {
          todos: this.state.todos.filter(todo => todo.id !== id)
        }
      )
    })
  }
  delList = async (id) => {
    await fetch("todoslists/" + id, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => res.json()).then(jsonRes => {
      this.setState(
        {
          lists: this.state.lists.filter(list => list.id !== id),
          todos: this.state.todos.filter(todo => todo.listId !== id)
        }
      )
    })
  }

  editTodo = async (todo) => {
    await fetch("todos/" + todo.id, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ completed: !todo.completed })
    }).then(res => res.json()).then(jsonRes => {
      this.setState(
        {
          todos: this.state.todos.map(Todo => {
            if (Todo.id === todo.id) {
              Todo.completed = !Todo.completed
            }
            return Todo
          })
        }
      )
    })
  }

  editList = async (list) => {
    await fetch("todoslists/" + list.id, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ completed: !list.completed })
    }).then(res => res.json()).then(jsonRes => {
      this.setState(
        {
          lists: this.state.lists.map(List => {
            if (List.id === list.id) {
              List.completed = !List.completed
            }
            return List
          }),
          todos: this.state.todos.map(Todo => {
            if (Todo.listId === list.id) {
              Todo.completed = !Todo.completed
            }
            return Todo
          })
        }
      )
    })
  }


  getTodos = async () => {
    const response = await fetch("todos")
    const jsonResponse = await response.json()
    this.setState({
      todos: jsonResponse.todos,
      loading: false
    })

  }
  getTodosByList = async (listId) => {
    const response = await fetch("todos/" + listId)
    const jsonResponse = await response.json()
    console.log(this)
    this.setState({
      todos: jsonResponse.todos,
      currentList: listId,
      loading: false
    })

  }
  async getAll() {
    const response = await fetch("http://localhost:5000/")
    const jsonResponse = await response.json()
    this.setState({
      todos: jsonResponse.todos,
      lists: jsonResponse.todoslists,
      loading: false
    })

  }


}

