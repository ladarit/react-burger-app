import React from 'react';
import Aux from '../../hoc/Auxilary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import cssClasses from './Layout.css';

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <main className={cssClasses.Content}>
            {props.children}    
        </main>
    </Aux>
);

export default layout;