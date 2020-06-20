import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar } from '@material-ui/core';
import { useNavbarStyles } from '../../styles';
import logo from '../../images/logo.png';

function Logo() {
  const classes = useNavbarStyles();

  return (
    <div className={classes.logoContainer}>
      <Link to="/">
        <div className={classes.logoWrapper}>
          <img src={logo} alt="Instagram" className={classes.logo} />
        </div>
      </Link>
    </div>
  );
}

function Navbar() {
  const classes = useNavbarStyles();

  return (
    <AppBar className={classes.appBar}>
      <section className={classes.section}>
        <Logo />
      </section>
    </AppBar>
  );
}

export default Navbar;
