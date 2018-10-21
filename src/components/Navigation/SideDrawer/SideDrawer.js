import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilary/Auxilary';

import cssClasses from '../SideDrawer/SideDrawer.css';

const sideDrawer = (props) => {

    const attachedClasses = [cssClasses.SideDrawer, props.opened ? cssClasses.Open : cssClasses.Close ].join(' ');

    return (
        <Aux>
            <Backdrop show={props.opened} clicked={props.close}/>
            <div className={attachedClasses}>
                <div className={cssClasses.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    )
};

export default sideDrawer;