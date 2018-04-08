import React from 'react';
import Aux from '../../hoc/Auxilary';
import cssClasses from './Layout.css';

const layout = (props) => (
    <Aux>
        <div>ToolBar, SideDrawer, Backdrop</div>
        <main className={cssClasses.Content}>
           {props.children}    
        </main>
    </Aux>
);

export default layout;