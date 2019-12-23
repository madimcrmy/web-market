import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Button from '../../atoms/Button';
import styled from 'styled-components';


class NavBar extends React.Component {

  state = {};

  render() {
    return (
      <Fragment>
        <StyledNav className="navbar navbar-expand-sm px-sm-5">
          <Link to="/">
            <i className="fa fa-home navbar-brand"></i>
          </Link>

          <Link to="/cart" className="ml-auto">
            <Button
              textColor="blue"
              borderColor="transparent"
            ><i className="fas fa-cart-plus"><span>My Cart</span></i>
            </Button>
          </Link>
        </StyledNav>
      </Fragment>
    );
  }
}

// NavBar.propTypes = {};
const StyledNav = styled.nav`
  background: var(--darkGray) !important;
  .nav-link {
    color: white;
  }
  i.navbar-brand {
    color: var(--mainBlue);
    font-size: 2rem;
  }
  i.plus{
    color: var(--mainBlue);
    font-size:2rem;
  }
`

export default NavBar;
