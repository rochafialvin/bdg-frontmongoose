import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavLink,
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
                  <NavLink tag={Link} className='nav-link' to="/">All Products</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={Link} className='nav-link' to="/register">
                    Register
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={Link} className='nav-link' to="/login">
                    Login
                  </NavLink>
                </NavItem>
              </Nav>
        )
      } else {
        // Sudah login
        return (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} className='nav-link' to="/">All Products</NavLink>
              </NavItem>
              <UncontrolledDropdown>
                <DropdownToggle nav inNavbar>
                  Hello, {this.props._username}
                </DropdownToggle>

                <DropdownMenu>
                  <NavLink tag={Link} to='/profile'>
                    <DropdownItem>Profile</DropdownItem>
                  </NavLink>
                  <NavLink tag={Link} to='/editprofile'>
                    <DropdownItem>Edit Profile</DropdownItem>
                  </NavLink>

                  <DropdownItem divider/>
                  <NavLink onClick={this.props.onLougoutUser}>
                    <DropdownItem>Logout</DropdownItem>
                  </NavLink>
                  
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
                <Link className = 'navbar-brand' to="/login">reactstrap</Link>
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
