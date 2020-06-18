import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkWrapper = props => {
    return (
        // <NavLink activeStyle={{ fontWeight: "bold" }} {...props} />
        <NavLink activeClassName="activeLinkHeader" {...props} />

    );
}
export default LinkWrapper;