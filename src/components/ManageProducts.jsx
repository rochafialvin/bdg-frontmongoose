import React, { Component } from 'react'

export class ManageProducts extends Component {
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
                            <td><input className='form-control' type='text'/></td>
                            <td><input className='form-control' type='text'/></td>
                            <td><input className='form-control' type='text'/></td>
                            <td><input className='form-control' type='text'/></td>
                            <td><button className='btn btn-outline-warning'>Add</button></td>
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
