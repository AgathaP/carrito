import React from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';

class Navegacion extends React.Component {
    render() {
        return (
            <Navbar color="light" light expand="xl">
                <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Sobre nosotros</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Seminarios</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Cursos online</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Navegacion;