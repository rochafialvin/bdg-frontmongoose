import React, { Component } from 'react'
import {Link ,NavLink} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class Header extends Component {

    
    state = {
        isOpen: false
    };
    
    toggle = () => {
        this.setState({
            isOpen: !this.state.setState
        });
    }

    render() {
        return (
            <div>
        <Navbar color="light" light expand="md">
          <Link className = 'navbar-brand' to="/">reactstrap</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
                <NavLink className='nav-link' to="/manageproducts">Manage Product</NavLink>
              </NavItem>

              <NavItem>
                <NavLink className='nav-link' to="/register">Register</NavLink>
              </NavItem>

              <NavItem>
                <NavLink className='nav-link' to="/login">Login</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
        )
    }
}

export default Header
