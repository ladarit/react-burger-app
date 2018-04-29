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
        <p>Current price: <strong>{props.price.toFixed(2)}$</strong></p>
        {controls.map((control)=>(
            <BuildControl
                key={control.ingrName}    
                ingrName={control.ingrName}
                added={() => props.ingredientAdded(control.type)}
                removed={() => props.ingredientRemoved(control.type)}
                isDisabled={props.disabledInfo[control.type]}/>
        ))}
        <button 
            className={cssClasses.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>
            ORDER NOW
        </button>
    </div>
);

export default buildControls;