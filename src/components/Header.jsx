import React, { Component } from 'react'
import {Link ,NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import { onLougoutUser } from '../actions/index'

class Header extends Component {

    
    state = {
        isOpen: false
    };
    
   toggle = () => {
        this.setState({
            isOpen: !this.state.setState
        });
    }

    renderNavigation = () => {
      // jika belum login / username = "" / false
      if(!this.props._username){
        // Belum login
        return (
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className='nav-link' to="/">All Products</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className='nav-link' to="/register">
                    <button className="btn btn-outline-success">Register</button>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className='nav-link' to="/login">
                    <button className="btn btn-outline-primary" >Login</button>
                  </NavLink>
                </NavItem>
              </Nav>
        )
      } else {
        // Sudah login
        return (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className='nav-link' to="/">All Products</NavLink>
              </NavItem>
              <UncontrolledDropdown>
                <DropdownToggle nav inNavbar>
                  Hello, username
                </DropdownToggle>

                <DropdownMenu>
                  <NavLink to="/manageproducts">
                    <DropdownItem>Manage Products</DropdownItem>
                  </NavLink>

                  <Button className="dropdown-item">Logout</Button>
                </DropdownMenu>

              </UncontrolledDropdown>
            </Nav>
        )
      }
    }

    render() {
        return (
            <div>
              <Navbar color="light" light expand="md">
                <Link className = 'navbar-brand' to="/">reactstrap</Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  
                    {this.renderNavigation()}
                
                </Collapse>
              </Navbar>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  // this.props._username
  // this.props._id
  return {
    _username : state.auth.username,
    _id: state.auth.id
  }
}

export default connect(mapStateToProps, {onLougoutUser} )(Header)
// Parameter pertama dari function connect () digunakan untuk mengambil data di redux
//  Parameter kedua digunakan untuk mengolah (Menambah, Menghapus, Mengubah) data di redux state

// Belum login
{/* <NavItem>
                <NavLink className='nav-link' to="/">All Products</NavLink>
              </NavItem>

              <NavItem>
                <NavLink className='nav-link' to="/register">
                  <button className="btn btn-outline-success">Register</button>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className='nav-link' to="/login">
                  <button className="btn btn-outline-primary" >Login</button>
                </NavLink>
              </NavItem> */}

// Setelah login
{/* <NavItem>
              <NavLink className='nav-link' to="/">All Products</NavLink>
            </NavItem>
            <UncontrolledDropdown>
              <DropdownToggle nav inNavbar>
                Hello, username
              </DropdownToggle>

              <DropdownMenu>
                <NavLink to="/manageproducts">
                  <DropdownItem>Manage Products</DropdownItem>
                </NavLink>

                <Button className="dropdown-item">Logout</Button>
              </DropdownMenu>

            </UncontrolledDropdown> */}