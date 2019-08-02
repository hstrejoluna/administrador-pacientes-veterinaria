import React from 'react';
import PropTypes from 'prop-types';
const Header = ({titulo}) => ( // Utilización de JSX, buena practica.
    <header>
        <h1 className="text-center">{titulo}</h1>
    </header>
);

Header.propTypes = {
    titulo : PropTypes.string.isRequired
}

export default Header;
