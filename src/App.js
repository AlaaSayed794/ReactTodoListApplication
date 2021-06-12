import './App.css';
import Todos from './Components/Todos'
import Lists from './Components/Lists'
import AddTodo from './Components/AddTodo'
import AddList from './Components/AddList'
import { Card, Button, Accordion } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getAll } from './actions/genericActions'

import React, { Component } from 'react'

class App extends Component {
  //mounting methods
  constructor(props) {
    super(props)
    this.state = { currentList: 0, loading: true }

  }
  componentDidMount() {
    this.setState({
      loading: true
    })
    this.props.getAll()
    this.setState({
      loading: false
    })
  }

  render() {
    const todosss = this.state.loading ? <h2>loading</h2> : <Todos />
    const lists = this.state.loading ? <h2>loading</h2> : <Lists />

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
              <Card.Body>   <AddList buttonText="add list" /></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                add todo
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>        <AddTodo buttonText="add Todo" />
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
}

export default connect(null, { getAll })(App)

