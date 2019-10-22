import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from '../config/axios'

export class Home extends Component {

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
            console.log({res})

        }).catch(err => {
            console.log({err})
            
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center display-4">List Tasks</h1>
                <ul className="list-group list-group-flush mb-5">
                    {/* {this.renderlist()} */}
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
}

const mapStateToProps = state => {
    return {
        _id: state.auth._id
    }
}

export default connect(mapStateToProps)(Home)
