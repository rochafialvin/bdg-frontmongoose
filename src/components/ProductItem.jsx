import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class ProductItem extends Component {

    render() {
        let {id, name, desc, price, picture} = this.props.barang

        return (
            <div className="card col-12 col-lg-5 col-xl-3 mx-auto mx-xl-3 my-3">
                <img src={picture} alt={name} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{desc}</p>
                    <p className="card-text">{price}</p>
                    <input type="text" className="form-control mb-2"/>
                    <Link to={`/detail/${id}/${id + 1}`} ><button className="btn btn-block btn-outline-dark">Detail</button></Link>
                    <button className="btn btn-block btn-outline-primary">Add to Cart</button>
                </div>
            </div>
        )
    }
}

export default ProductItem
