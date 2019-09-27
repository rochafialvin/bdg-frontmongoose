import React, { Component } from 'react'
import axios from 'axios'

export class ManageProducts extends Component {


    onAddClick = () => {
        // Membaca data dari textbox
        let _name = this.name.value
        let _desc = this.desc.value
        let _price = this.price.value
        let _picture = this.picture.value

        // POST data tersebut ke database
        axios.post(
            'http://localhost:2099/products',
            {
                name: _name,
                desc: _desc,
                price: _price,
                picture: _picture
            }
        ).then( (res) => {
            alert('Data sudah berhasil di tambahkan')
        } )

    }

    render() {
        return (
            <div className='container'>
                <h1 className="display-4 text-center">List Products</h1>
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>DESC</th>
                            <th>PRICE</th>
                            <th>PICTURE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                </table>

                <h1 className="display-4 text-center">Input Product</h1>
                <table className="table table-hover text-center">

                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>DESC</th>
                            <th>PRICE</th>
                            <th>PICTURE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><input ref={ (input) => {this.name = input} } className='form-control' type='text'/></td>
                            <td><input ref={ (input) => {this.desc = input} } className='form-control' type='text'/></td>
                            <td><input ref={ (input) => {this.price = input} } className='form-control' type='text'/></td>
                            <td><input ref={ (input) => {this.picture = input} } className='form-control' type='text'/></td>
                            <td><button onClick={this.onAddClick} className='btn btn-outline-warning'>Add</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ManageProducts

// 1. Menambah product (POST)
// 2. Membaca product (GET)
// 3. Update product (PATCH)
// 4. Delete product (DELETE)
