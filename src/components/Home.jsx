import React, { Component } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem'

class Home extends Component {

    state = {
        products: []
    }

    renderProducts = () => {
        // state.products = [{}, {}, {}]
        // product = {id, name, desc, price, pictures}
        return this.state.products.map((product)=>{
            return (
                <ProductItem barang={product} key={product.id}/>
            )
        })

    }

    // Akan running otomatis setelah render yang pertama kali
    componentDidMount() {
        // GET data
        axios.get('http://localhost:2099/products')
            .then((res) => {
                this.setState({ products: res.data })

            })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {/* Search Bar */}
                    <div className="col-12 col-lg-3 col-xl-2">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="border-bottom border-secondary card-title">Search</h1>
                                <form className="form-group mb-3">
                                    <h4>Name</h4>
                                    <input type="text" className="form-control" />

                                    <h4>Price</h4>
                                    <input placeholder="Minimum" type="text" className="form-control mb-2" />
                                    <input placeholder="Maximum" type="text" className="form-control" />
                                </form>
                                <button className="btn btn-block btn-outline-primary">Search</button>
                                <button className="btn btn-block btn-outline-warning">Show All</button>
                            </div>
                        </div>
                    </div>
                    
                    {/* List Products */}
                    <div className="row col-12 col-lg-9 col-xl-10">
                        {this.renderProducts()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home


// Render PRoduct
    // GET data dari database
    // Simpan di dalam state local
    // Map data menjadi card