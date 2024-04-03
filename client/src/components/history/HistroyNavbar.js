
import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';

const HistroyNavbar = () => {
    const [openNavText, setOpenNavText] = useState(false);
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>Navbar w/ text</MDBNavbarBrand>
      <MDBNavbarToggler
        type='button'
        data-target='#navbarText'
        aria-controls='navbarText'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setOpenNavText(!openNavText)}
      >
        <MDBIcon icon='bars' fas />
      </MDBNavbarToggler>
      <MDBCollapse navbar open={openNavText}>
        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current='page' href='#'>
              Home
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href='#'>Features</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
        <span className='navbar-text'> Navbar text with an inline element </span>
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>
  )
}

export default HistroyNavbar
