import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from '../config/axios'
import { isNull } from 'util'

export class Profile extends Component {

    state = {
        profile: null
    }

    componentDidMount() {
        // Get user
        axios.get(`/users/${this.props._id}`)
            .then(res => {
                this.setState({profile: res.data})

            }).catch(err => {
                console.log(err)

            })
    }

    render() {
        if(!isNull(this.state.profile)){
            let {user, avatar} = this.state.profile
            return (
                <div>
                    <img src={avatar} alt={user.name}/>
                    <h1>Hello, {user.name}</h1>
                    <p>{user.name} | {user.age} | {user.email}</p>
                </div>
            )
        }

        return <h1>Loading ...</h1>
    }
}

const mapStateToProps = state => {
    return {
        _id: state.auth._id
    }
}

export default connect(mapStateToProps)(Profile)
