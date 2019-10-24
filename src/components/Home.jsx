import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from '../config/axios'
import {Redirect} from 'react-router-dom'

export class Home extends Component {

    state = {
        tasks : []
    }

    componentDidMount() {
        this.getTasks()
    }

    getTasks = () => {
        axios.get(`/tasks/${this.props._id}`)
            .then(res => {
                this.setState({ tasks : res.data })

            }).catch(err => {  
                console.log(err)

            })
    }

    addTask = () => {
        // Get data
        let userid = this.props._id
        let description = this.task.value

        // POST new task
        axios.post(
            `/tasks/${userid}`,
            {
                description
            }
        ).then(res => {
            this.task.value = ""
            this.getTasks()

        }).catch(err => {
            console.log({err})
            
        })
    }

    doneTask = (_id) => {
        axios.patch(`/tasks/${_id}`, {completed: true})
            .then(res => {
                this.getTasks()
            }).catch(err => {
                console.log(err)
            })
    }

    cancelTask = (_id) => {
        axios.patch(`/tasks/${_id}`, {completed: false})
            .then(res => {
                this.getTasks()
            }).catch(err => {
                console.log(err)
            })
    }

    deleteTask = (_id) => {
            axios.delete(`/tasks/${_id}`)
                .then(res => {
                    this.getTasks()
                }).catch(err => {
                    console.log(err)
                })

    }

    renderList = () => {
        return this.state.tasks.map(task => {
            if(task.completed){
                return (
                    <li onDoubleClick={() => { this.deleteTask(task._id) }} className="list-group-item d-flex justify-content-between">
                        <del>{task.description}</del>
                        <button onClick={() => {this.cancelTask(task._id)}} className="btn btn-outline-danger">Cancel</button>
                    </li>
                )
            }

            return (
                <li onDoubleClick={() => { this.deleteTask(task._id) }} className="list-group-item d-flex justify-content-between">
                    <span>{task.description}</span>
                    <button onClick={() => {this.doneTask(task._id)}} className="btn btn-outline-primary">Done</button>
                </li>
            )
        })
    }

    render() {
        if(this.props._id){
            return (
                <div className="container">
                    <h1 className="text-center display-4">List Tasks</h1>
                    <ul className="list-group list-group-flush mb-5">
                        {this.renderList()}
                    </ul>
    
                    <form className="form-group mb-3">
                        <input ref={(input) => this.task = input} type="text" className="form-control" placeholder="You next move ..."/>
                    </form>
                    <button 
                        className="btn btn-block btn-outline-danger"
                        onClick={this.addTask}
                    >Up!</button>
                </div>
            )
        }

        return <Redirect to='/login'/>
    }
}

const mapStateToProps = state => {
    return {
        _id: state.auth._id
    }
}

export default connect(mapStateToProps)(Home)
