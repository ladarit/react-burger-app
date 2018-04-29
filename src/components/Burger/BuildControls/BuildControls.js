import React from 'react';
import cssClasses from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {ingrName: 'Salad', type: 'salad'},
    {ingrName: 'Meat', type: 'meat'},
    {ingrName: 'Bacon', type: 'bacon'},
    {ingrName: 'Tomato', type: 'tomato'},
    {ingrName: 'Cheese', type: 'cheese'}
];

const buildControls = (props) => (
    <div className={cssClasses.BuildControls}>
        {controls.map((control)=>(
            <BuildControl
                key={control.ingrName}    
                ingrName={control.ingrName}
                added={() => props.ingredientAdded(control.type)}
                removed={() => props.ingredientRemoved(control.type)}
                isDisabled = {props.disabledInfo[control.type]}/>
        ))}
    </div>
);

export default buildControls;