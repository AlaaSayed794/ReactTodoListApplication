import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todosActions'

class AddTodos extends Component {
    state = {
        description: "",
        listId: 0
    }
    onSubmit = (event) => {
        event.preventDefault()
        if (this.state.description.length > 0) {
            let listId = this.state.listId ? this.state.listId : this.props.lists[0].id

            this.props.addTodo(this.state.description, listId)
            this.setState({
                description: "", listId: 0
            }
            )
        }
        else {
            alert("empty")
        }
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }
        )
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="add todo" name="description" onChange={this.onChange} value={this.state.description} />
                <select name="listId" onChange={this.onChange}>
                    {
                        this.props.lists.map(list =>
                            <option key={list.id} value={list.id} >{list.description}</option>)
                    }
                </select>
                <input type="submit" value={this.props.buttonText} />

            </form>
        )
    }
}
const mapStateToProps = (state) => ({
    lists: state.listsReducer.lists
}
)
export default connect(mapStateToProps, { addTodo })(AddTodos)

