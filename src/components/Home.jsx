import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {

    state = {
        products: []
    }

    renderProducts = () => {
        // state.products = [{}, {}, {}]
        // product = {id, name, desc, price, pictures}
        return this.state.products.map((product)=>{
            return (
                <div className="card">
                    <img src="https://www.pngfind.com/pngs/m/162-1621689_cloud9-lcs-jersey-cloud-9-csgo-jersey-hd.png" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Hoodie Premium</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet,  spain italy london</p>
                        <p className="card-text">Rp. 200000</p>
                        <input type="text" className="form-control mb-2"/>
                        <button className="btn btn-block btn-outline-dark">Detail</button>
                        <button className="btn btn-block btn-outline-primary">Add to Cart</button>
                    </div>
                </div>
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
                    <div className="col-10 col-lg-3 col-xl-2">
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
                    <div className="col-8">
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