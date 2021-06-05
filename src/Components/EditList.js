import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class EditList extends Component {
    state = {
        description: "",
        redirect: false
    }
    onSubmit = async (event) => {
        event.preventDefault()
        if (this.state.description.length > 0) {

            await this.props.location.editListDesc(this.props.match.params.id, this.state.description)
            this.setState({
                redirect: true
            }
            )
        }
        else {
            alert("empty")
        }
    }
    componentDidMount() {
        this.setState({
            description: this.props.location.oldDescription
        })
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }
        )
    }
    render() {
        console.log(this.props.location.oldDescription)
        return (
            this.state.redirect ? <Redirect to="/" />
                :
                <div>
                    <form onSubmit={this.onSubmit}>
                        <input type="text" placeholder="edit list" name="description" onChange={this.onChange} value={this.state.description} />
                        <input type="submit" value={"submit"} />
                    </form>
                </div>
        )
    }
}
