import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Navbar extends Component {
  render() {
    const { title } = this.props;
    return (
      <header className="navbar">
        <div className="navbar-nav">
          <div className="navbar-nav__title">
            <span>{title}</span>
          </div>
        </div>
      </header>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Exchange Currency'
}

export default Navbar;