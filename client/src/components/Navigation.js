import { Navbar, NavLink, Nav } from 'react-bootstrap';
import '../assets/css/Nav.css';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/images/Picture1.png';
import Home from '../pages/Home';

export default function Navigation() {
    return (
        <Navbar className='navFull' collapseOnSelect expand='lg' bg='black'>
            <Navbar.Toggle aria-controls='navbarScroll' data-bs-target='#navbarScroll' />
            <Navbar.Collapse id='navbarScroll'>


                <NavLink className='imgWrap' href='/'>
                    <img className='navimg' src={Logo} alt="camera img" />
                </NavLink>

                <Nav className='navWrap'>

                    <NavLink className='navItem' href='/'>
                        <FontAwesomeIcon className='homeIcon' icon={faHome} />Home
                    </NavLink>
                    <NavLink className='navItem login' href='/about'>Who We Are</NavLink>
                    <NavLink className='navItem login' href='/technology'>Technology</NavLink>
                    <NavLink className='navItem' href='/literature'>Literature</NavLink>
                    <NavLink className='navItem' href='/contact'>Contact Us</NavLink>

                    {/* <NavDropdown id='dropDown' className='navItem' title="Technologies">
                        <NavDropdown.Item className='dropDownItem' href="#action/3.1">Visibot</NavDropdown.Item>
                        <NavDropdown.Item className='dropDownItem' href="#action/3.2">Images</NavDropdown.Item>
                    </NavDropdown> */}

                    <div className='socialWrap'>
                        {/* <a target='_blank' rel="noreferrer" href='https://instagram.com'>
                            <FontAwesomeIcon className='socials' icon={faInstagram} />
                        </a>

                        <a target='_blank' rel="noreferrer" href='https://facebook.com'>
                            <FontAwesomeIcon className='socials' icon={faFacebook} />
                        </a> */}
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}