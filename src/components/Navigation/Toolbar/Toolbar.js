import React from 'react';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';

import cssClasses from './Toolbar.css';

const toolbar = (props) => (
    <header className={cssClasses.Toolbar}>
        <DrawerToggle clicked={props.sideDrawerToogleClicked}/>
        <div className={cssClasses.Logo}>
            <Logo/>
        </div>
        <nav className={cssClasses.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>    
);

export default toolbar;