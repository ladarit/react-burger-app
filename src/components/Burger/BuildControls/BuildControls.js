import React from 'react';
import cssClasses from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {ingrName: 'Salad', type: 'salad'},
    {ingrName: 'Meat', type: 'meat'},
    {ingrName: 'Bacon', type: 'bacon'},
    {ingrName: 'Tomato', type: 'tomato'},
    {ingrName: 'Cheese', type: 'cheese'},
];

const buildControls = (props) => (
    <div className={cssClasses.BuildControls}>
        {controls.map((control)=>{
            return <BuildControl 
                key={control.ingrName}    
                ingrName={control.ingrName}/>;
        })}
    </div>
);

export default buildControls;