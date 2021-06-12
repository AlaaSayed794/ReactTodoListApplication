import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addList } from '../actions/listsActions'
class AddList extends Component {
    state = {
        description: ""
    }
    onSubmit = (event) => {
        event.preventDefault()
        if (this.state.description.length > 0) {

            this.props.addList(this.state.description)
            this.setState({
                description: ""
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
                <input type="text" placeholder="add list" name="description" onChange={this.onChange} value={this.state.description} />
                <input type="submit" value={this.props.buttonText} />
            </form>
        )
    }
}

export default connect(null, { addList })(AddList)

