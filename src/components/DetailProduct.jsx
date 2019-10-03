import React, { Component } from 'react'

export class DetailProduct extends Component {
    render() {
        return (
            <div>
                <h1>Product yang ke : {this.props.match.params.purwadhika}</h1>
            </div>
        )
    }
}

export default DetailProduct
