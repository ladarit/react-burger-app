import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

import cssClasses from '../NavigationItems/NavigationItems.css';

const navigationItems = (props) => (
    <ul className={cssClasses.NavigationItems}>
        <NavigationItem link="/" active={true}>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>

    </ul>  
);

export default navigationItems;