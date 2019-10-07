import React, { Component } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem'

class Home extends Component {

    state = {
        products: [], // 1
        searchProducts: []
    }

    onSearch = () => {
        // input dari user akan di ubah menjadi huruf kecil
        let name = this.name.value.toLowerCase() // PrOdUct oNe => product one
        let min = parseInt(this.min.value) // "23" => 23
        let max = parseInt(this.max.value) // jika di tidak di isi akan menyimpan NaN

        let hasilFilter = this.state.products.filter((item) => {

            // name = six
            // item.name.toLowercase() => product one
            // product one.includes(six)

            // Search by Name
            // Ketika min dan max berupa NaN
            if(isNaN(min) && isNaN(max)){
                // Product One => product one
                return item.name.toLowerCase().includes(name)

            } else if(isNaN(max)){ // Search by Min and Name // Min

                // name: ""
                // min : 90000
                // max : NaN

                // price <= max       false

                return (
                    item.name.toLowerCase().includes(name) &&
                    item.price >= min
                    // 998 >= 90000
                )

                // [ {product four}, {product five} ]
    
            } else if(isNaN(min)){ // Search by Max and Name

                // name : ""
                // min : NaN
                // max : 90000

                return (
                    item.name.toLowerCase().includes(name) &&
                    item.price <= max
                )
    
            }  else { // Search by Name, Min, Max

                // name: f
                // min: 90.000
                // max: 150.000

                // final : ( true && true ) && false ==> (true) && false==> false
                return (
                    item.name.toLowerCase().includes(name) && // true
                    item.price >= min && // 185.000 >= 90.000 // true
                    item.price <= max // 185.000 <= 150.000 //  false
                )
            }

            // [ {product four} ]
        })

        this.setState({ searchProducts: hasilFilter })

    }

    renderProducts = () => {
        // state.products = [{}, {}, {}]
        // product = {id, name, desc, price, pictures}
        return this.state.searchProducts.map((product)=>{
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
                this.setState({ products: res.data, searchProducts: res.data })

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
                                    <input ref={(input) => {this.name = input}} type="text" className="form-control" />

                                    <h4>Price</h4>
                                    <input ref={(input) => {this.min = input}} placeholder="Minimum" type="text" className="form-control mb-2" />
                                    <input ref={(input) => {this.max = input}} placeholder="Maximum" type="text" className="form-control" />
                                </form>
                                <button onClick={this.onSearch} className="btn btn-block btn-outline-primary">Search</button>
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