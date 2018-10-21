import React, { Component } from 'react';
import Aux from '../Auxilary/Auxilary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import cssClasses from './Layout.css';

class Layout extends Component {
    state = {
        isSideDrawerOpened: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({ isSideDrawerOpened: false });
    }

    SideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { isSideDrawerOpened: !prevState.isSideDrawerOpened }
        });
    }

    render () {
        return (
            <Aux>
                <Toolbar sideDrawerToogleClicked={this.SideDrawerToggleHandler}/>
                <SideDrawer
                    opened={this.state.isSideDrawerOpened} 
                    close={this.SideDrawerClosedHandler}
                />
                <main className={cssClasses.Content}>
                    {this.props.children}    
                </main>
            </Aux>
        );
    }
}

export default Layout;