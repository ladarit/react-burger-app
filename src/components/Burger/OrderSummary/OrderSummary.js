import React from 'react';
import Aux from '../../../hoc/Auxilary';

const orderSummary = (props) => {
    const ingredients = Object
        .keys(props.ingredients)
        .map(ingrKey => {
            return (
                <li key={ingrKey}>                    
                    <span style={{textTransform: 'capitilize'}}>{ingrKey}</span>: {props.ingredients[ingrKey]}
                </li>
            )
        });
    return (
        <Aux>
            <h3 style={{textAlign: 'center'}}>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredients}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );
};

export default orderSummary;