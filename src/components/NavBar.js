import React from 'react';
import { Navbar, Nav, Dropdown, Button } from 'react-bootstrap';
import CartWidget from './CartWidget';
import SearchBar from './SearchBar';
import { FaCapsules, FaFirstAid, FaBaby, FaUserNurse, FaHome, FaLightbulb, FaTag } from 'react-icons/fa';

// Definimos nuestras categorías con subcategorías
const categories = [
  { 
    name: 'BELLEZA', 
    icon: <FaCapsules className="mr-1" />, 
    subcategories: ['Dermocosmética', 'Perfumes', 'Maquillaje']
  },
  { 
    name: 'SALUD', 
    icon: <FaFirstAid className="mr-1" />,
    subcategories: ['Medicamentos', 'Equipo Médico', 'Botiquin']
  },
  { 
    name: 'BEBES Y MATERNIDAD', 
    icon: <FaBaby className="mr-1" />,
    subcategories: ['Suplementos', 'Carritos', 'Pañales']
  },
  { 
    name: 'CUIDADO PERSONAL', 
    icon: <FaUserNurse className="mr-1" />,
    subcategories: ['Subcategoría 1', 'Subcategoría 2', 'Subcategoría 3']
  },
  { 
    name: 'HOGAR', 
    icon: <FaHome className="mr-1" />,
    subcategories: ['Subcategoría 1', 'Subcategoría 2', 'Subcategoría 3']
  },
  { 
    name: 'NOVEDADES', 
    icon: <FaLightbulb className="mr-1" />,
    subcategories: ['Subcategoría 1', 'Subcategoría 2', 'Subcategoría 3']
  },
  { 
    name: 'OUTLET', 
    icon: <FaTag className="mr-1" />,
    subcategories: ['Subcategoría 1', 'Subcategoría 2', 'Subcategoría 3']
  },
];

function NavBar() {
    return (
      <>
        <Navbar expand="lg" style={{backgroundColor: '#014694', marginBottom: '1rem', padding: '1rem 2rem'}}>
          <Navbar.Brand href="#home" style={{color: 'white', marginLeft: '2rem', fontWeight: 'bold', fontSize: '1.5rem'}}>farmaciaShop</Navbar.Brand>
          <div className="d-flex w-100 justify-content-between">
            <SearchBar />
            <Button variant="outline-light" style={{ marginRight: '10px' }}>Cuenta</Button>
            <CartWidget />
          </div>
        </Navbar>
        <Navbar expand="lg" style={{backgroundColor: '#014694'}}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="w-100">
            <Nav className="mx-auto">
              {categories.map((category) => (
                <Dropdown key={category.name}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic" style={{color: 'white', backgroundColor: 'transparent', border: 'none'}}>
                    {category.icon} {category.name}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {category.subcategories.map(subcat => (
                      <Dropdown.Item href={`#/action-${subcat}`}>{subcat}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
  
  export default NavBar;
